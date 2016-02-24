import cardTemplate from './card.html';

class CardDirective {
  constructor () {
    'ngInject';

    const directive = {
      restrict: 'E',
      template: cardTemplate,
      scope: {
          data: '='
      },
      controller: CardController,
      controllerAs: 'card',
      bindToController: true
    };

    return directive;
  }
}

class CardController {
  constructor () {
    'ngInject';
  }
  isImage(filename) {
    const extension = filename.split('.').pop();
    switch (extension) {
      case 'jpg':
      case 'png':
      case 'gif':
        return true;
        break;
      default: 
        return false;
    }
   // console.log(extension);
    return false;    
  }

  getExtension(filename) {
    return filename.split('.').pop();
  }
}

export default CardDirective;