(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-open-about]"),
      closeModalBtn: document.querySelector("[data-modal-close-about]"),
      modal: document.querySelector("[data-modal-about]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      document.body.classList.toggle("no-scroll");
      refs.modal.classList.toggle("is-hidden");
    }
  })();