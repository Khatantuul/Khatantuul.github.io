function toggleMenu() {
    const menuToggle = document.querySelector('.collapse-links');
    const navigation = document.querySelector('.menu-icon');
    menuToggle.classList.toggle('visible');
    navigation.classList.toggle('visible');
}