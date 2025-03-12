document.addEventListener("DOMContentLoaded", function() {
   
    const profileContainer = document.querySelector('.profile-container');
    profileContainer.addEventListener('click', function() {
        profileContainer.style.backgroundColor = profileContainer.style.backgroundColor === 'lightblue' ? 'white' : 'lightblue';
    });

  
    const profilePic = document.querySelector('.profile-pic');
    profilePic.addEventListener('click', function() {
        alert('You clicked the profile picture!');
    });
});