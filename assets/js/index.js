const toggleMenuNavigation = (displayState) => {
    let closeButton = document.getElementsByClassName('close-icon')[0];
    let navigation = document.getElementsByClassName('header__nav')[0];
    if(displayState === 'block') {
        navigation.classList.add('header__nav--open');
        closeButton.classList.add('close-icon--open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }else{
        navigation.classList.remove('header__nav--open');
        closeButton.classList.remove('close-icon--open');
        document.getElementsByTagName('body')[0].style.overflow = 'hidden';
    }
}