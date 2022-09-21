(() => {

  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };
console.log(refs)
  refs.openModalBtn.forEach(elem =>
    elem.addEventListener('click', toggleModal) );
  refs.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    document.body.classList.toggle("no-scroll");
    refs.modal.classList.toggle("is-hidden");
  }
})();

