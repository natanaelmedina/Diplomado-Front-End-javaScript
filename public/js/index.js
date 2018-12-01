
import "../../Views/contact/contact.js";
import "../../Views/login/login.js";
import "../../Views/default/partial/menu.js";

$(document)
  .ready(function () {

    /*
        // fix main menu to page on passing
        $('.main.menu').visibility({
          type: 'fixed'
        });
     */
    $('.overlay').visibility({
      type: 'fixed',
      offset: 80
    });

    // lazy load images
    $('.image').visibility({
      type: 'image',
      transition: 'vertical flip in',
      duration: 500
    });

    // show dropdown on hover
    $('.main.menu  .ui.dropdown').dropdown({
      on: 'hover'
    });

    window.onpopstate = function (event) {
      if (!event.state) {
        $('.login-form').modal('hide');
      } else if (event.state.type === 'login') {
        $('.login-form').show();
        $('#root').hide();
        $('.login-form').find('.column').transition({
          animation: 'fly up',
          duration: '500ms'
        });
      }
    }
  });

function _fetch(url, options) {
  var url = new URL(window.location.origin + url);
  Object.keys(options.params).forEach(function (key) { url.searchParams.append(key, options.params[key]) });
  return fetch(url, options)
}

export { _fetch }





