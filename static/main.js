window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 10) {
    header.classList.add('bg-red-700', 'shadow-lg');
    header.classList.remove('bg-transparent');
  } else {
    header.classList.remove('bg-red-700', 'shadow-lg');
    header.classList.add('bg-transparent');
  }
});