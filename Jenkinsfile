pipeline {
    agent any

    environment {
        IMAGE = "onedrop-website:latest"
        CONTAINER = "onedrop-website"
        NETWORK = "custom_bridge"
        STATIC_IP = "172.25.0.11"
        PORT = "8383"
        ENV_FILE = "/home/envs/onedropweb.env"
    }

    stages {

        stage('Pull Code') {
            steps {
                script {
                    try {
                        checkout scm
                        echo "✅ Code pulled successfully"
                    } catch (Exception e) {
                        error "❌ Failed to pull code: ${e.message}"
                    }
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    try {
                        sh """
                            docker build -t ${IMAGE} .
                        """
                        echo "✅ Docker image built successfully"
                    } catch (Exception e) {
                        error "❌ Failed to build Docker image: ${e.message}"
                    }
                }
            }
        }

        stage('Stop and Remove Old Container') {
            steps {
                script {
                    try {
                        sh """
                            if [ \$(docker ps -aq -f name=^${CONTAINER}\$) ]; then
                                echo "Stopping and removing old container..."
                                docker stop ${CONTAINER} || true
                                docker rm ${CONTAINER} || true
                                echo "✅ Old container removed"
                            else
                                echo "ℹ️  No existing container found"
                            fi
                        """
                    } catch (Exception e) {
                        echo "⚠️  Warning: Failed to remove old container: ${e.message}"
                        // Continue anyway
                    }
                }
            }
        }

        stage('Verify Environment File') {
            steps {
                script {
                    try {
                        sh """
                            if [ ! -f ${ENV_FILE} ]; then
                                echo "❌ Environment file not found at ${ENV_FILE}"
                                exit 1
                            fi
                            echo "✅ Environment file verified"
                        """
                    } catch (Exception e) {
                        error "❌ Environment file check failed: ${e.message}"
                    }
                }
            }
        }

        stage('Run New Container') {
            steps {
                script {
                    try {
                        sh """
                            docker run -d \
                            --name ${CONTAINER} \
                            --network ${NETWORK} \
                            --ip ${STATIC_IP} \
                            --env-file ${ENV_FILE} \
                            -p ${PORT}:3000 \
                            --restart unless-stopped \
                            ${IMAGE}
                        """
                        echo "✅ Container started successfully"
                    } catch (Exception e) {
                        error "❌ Failed to start container: ${e.message}"
                    }
                }
            }
        }

        stage('Health Check') {
            steps {
                script {
                    try {
                        sh """
                            echo "Waiting for container to be ready..."
                            sleep 5
                            
                            if [ \$(docker ps -q -f name=^${CONTAINER}\$ -f status=running) ]; then
                                echo "✅ Container is running"
                                docker logs --tail 20 ${CONTAINER}
                            else
                                echo "❌ Container failed to start"
                                docker logs ${CONTAINER}
                                exit 1
                            fi
                        """
                    } catch (Exception e) {
                        error "❌ Health check failed: ${e.message}"
                    }
                }
            }
        }

        stage('Cleanup Old Images') {
            steps {
                script {
                    try {
                        sh """
                            echo "Cleaning up dangling images..."
                            docker image prune -f || true
                            echo "✅ Cleanup completed"
                        """
                    } catch (Exception e) {
                        echo "⚠️  Warning: Cleanup failed: ${e.message}"
                        // Don't fail the build for cleanup issues
                    }
                }
            }
        }
    }

    post {
        success {
            echo "🎉 Deployment completed successfully!"
            echo "Container: ${CONTAINER}"
            echo "Network IP: ${STATIC_IP}"
            echo "Port: ${PORT}"
        }
        failure {
            echo "❌ Deployment failed!"
            script {
                sh """
                    echo "Container logs:"
                    docker logs ${CONTAINER} || echo "No logs available"
                """
            }
        }
        always {
            echo "Pipeline execution completed"
        }
    }
}
