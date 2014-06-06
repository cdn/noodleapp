'use strict';

// Generate image link
var SERVICE_INSTAGRAM = /(((instagr\.am)|(instagram\.com))\/\w\/\w+)/i;

exports.process = function(media, remix) {
  if (!remix.isMatched && media.url.match(SERVICE_INSTAGRAM)) {
    var parts = media.url.split('/');
    var shortcode = parts[parts.length - 2];

    remix.isMatched = true;

    remix.result = (media.text != media.url) ? media.text + ' ' : '';
    remix.result += '<div class="image-wrapper"><a href="' + media.url + '">' +
      '<img src="//instagram.com/p/' + shortcode + '/media/"/></a></div><a href="' + media.url +
      '" target="_blank" class="media-off">' + media.text + '</a>';
  }

  return remix;
};
