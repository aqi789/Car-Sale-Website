gsap.to('.overlay', {y: '-100vh', delay: 1.5});
gsap.to('.layer-1', {y: '-100vh', delay: 0.5});
gsap.to('.layer-2', {y: '-100vh', delay: 0.7});
gsap.to('.layer-3', {y: '-100vh', delay: 0.9});

gsap.fromTo('.home-text',
    {x: '-30rem', opacity: 0},
    {x: 0, opacity: 1, ease: 'back.out(1.7)', delay: 2});

    const revealElements = document.querySelectorAll('.reveal-element');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    revealElements.forEach(element => {
        observer.observe(element);
    });



    document.addEventListener('DOMContentLoaded', function () {
  
        var form = document.querySelector('form');

        function validateForm() {
            var name = form.querySelector('input[type="text"][placeholder="Name"]').value;
            var email = form.querySelector('input[type="email"][placeholder="Email"]').value;
            var subject = form.querySelector('input[type="text"][placeholder="Subject"]').value;
            var comment = form.querySelector('input[type="text"][placeholder="Comment"]').value;

            if (name.trim() === '') {
                alert('Please enter your name.');
                return false;
            }

            if (email.trim() === '' || !isValidEmail(email)) {
                alert('Please enter a valid email address.');
                return false;
            }

            if (subject.trim() === '') {
                alert('Please enter the subject.');
                return false;
            }

            if (comment.trim() === '') {
                alert('Please enter your comment.');
                return false;
            }

            alert('Form submitted successfully!');
            form.reset(); 
            return true;
        }

        function isValidEmail(email) {
            var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }
    });
