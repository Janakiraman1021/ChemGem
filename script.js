function getChemistryResponse(question) {
    // Extended example: Respond to questions about chemical elements
    const elements = {
      'hydrogen': 'Hydrogen is the lightest and most abundant element in the universe. It is the primary fuel for stars and plays a crucial role in the formation of water.',
      'oxygen': 'Oxygen is a diatomic molecule and is essential for respiration. It makes up a significant portion of the Earth\'s atmosphere and is vital for supporting life.',
      'carbon': 'Carbon is the basis of organic chemistry and is found in all known life forms. It has a unique ability to form diverse compounds due to its tetravalency.',
      'nitrogen': 'Nitrogen is a crucial component of amino acids and nucleic acids. It makes up a large portion of Earth\'s atmosphere and is important for the nitrogen cycle in ecosystems.',
      'gold': 'Gold is a precious metal known for its rarity and use in jewelry and electronics. It does not corrode or tarnish, making it a valuable material for various applications.',
      'sodium': 'Sodium is a highly reactive alkali metal. It reacts vigorously with water, and its compounds are essential for various biological processes, including nerve signal transmission.',
      'iron': 'Iron is a transition metal and a crucial component of hemoglobin in red blood cells. It is also widely used in construction and manufacturing due to its strength and durability.',
      'fluorine': 'Fluorine is a highly reactive halogen. It is used in toothpaste and water fluoridation to prevent tooth decay. Fluorine compounds are also employed in the production of various materials.',
      'helium': 'Helium is a noble gas and the second most abundant element in the universe. It is known for its low density and is used in various applications, including cooling in scientific research.',
      // Add more elements and their information as needed
    };
  
  
    // Convert the question to lowercase for case-insensitive matching
    const lowercaseQuestion = question.toLowerCase();
  
    for (const element in elements) {
      if (lowercaseQuestion.includes(element)) {
        return elements[element];
      }
    }
  
    // Default response for questions not related to known elements
    return 'I\'m sorry, I don\'t have information about that. Please ask another question.';
  }
  
  function sendMessage() {
    var userInput = document.getElementById('user-input');
    var chatBox = document.getElementById('chat-box');
  
    // Get user input
    var question = userInput.value.trim();
  
    // Display user message in the chat box
    chatBox.innerHTML += '<div class="user-message">' + question + '</div>';
  
    // Clear the input field
    userInput.value = '';
  
    // Get and display chemistry-related bot response
    var chemistryResponse = getChemistryResponse(question);
    chatBox.innerHTML += '<div class="bot-message">' + chemistryResponse + '</div>';
  
    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  