(() => {
    const refs = {
      openModalBtn: document.querySelectorAll("[data-modal-open-products]"),
      closeModalBtn: document.querySelector("[data-modal-close-products]"),
      modal: document.querySelector("[data-modal-products]"),
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
