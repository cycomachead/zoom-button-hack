(function setupZoom() {
  console.log('Setup Buttons loaded');
  // Boilerplate mutationobserver code
  // target element that we will observe
  const target = document.body;

  // config object
  const config = {
    attributes: false,
    attributeOldValue: false,
    characterData: false,
    characterDataOldValue: false,
    childList: true,
    subtree: false
  };

  // subscriber function
  function subscriber(mutations) {
    // TODO: This funcation should just check the mutation.
    mutations.forEach(processDOMUpdate);
  }
  // instantiating observer
  const observer = new MutationObserver(subscriber);

  // observing target
  observer.observe(target, config);

  // Looks for new Zoom Chat messages to add a button to.
  // NOT at all optimized w/MutationObserver.
  function processDOMUpdate() {
    console.log('Processing DOM updates');
    $('.chat-item__chat-info-header').filter((_, el) => !$(el).attr('button-added')).each((_, el) => {
      $(el).attr('button-added', true).after(
        '<button class="btn btn-default" onclick=performChatAction(this)>Do Thing</button>'
      );
    })
  }

  // This does the work.
  function window.performChatAction(button) {
    console.log('Chat Message Clicked!');
    // This is brittle...lol.
    let msgText = button.nextSibling.textContent;
    alert(`The message is: ${msgText}`);
  }

  // Call Initially to capture existing messages.
  processDOMUpdate();
})();
