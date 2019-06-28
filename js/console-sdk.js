function createElement(type = 'span', str, parent) {
  var el = document.createElement(type);
  el.innerHTML = str;
  $('.type-wrap').append(el);
  return el;
}

function type(text, cb = () => {}) {
  var el = createElement('span', '', '.type-wrap');
  $(el).typed({
    strings: ['<span style="color:white">' + text + '</span>'],
    loop: false,
    contentType: 'html',
    loopCount: false,
    callback: cb(),
    showCursor: false,
    typeSpeed: 0,
    backSpeed: 0,
    backDelay: 1000,
    loop: false,
  });
}

function f2() {
  type('$ zos create');
  $('.typed-cursor').css('color', 'black');
  setTimeout(function() {
    setTimeout(function() {
      createElement(
        'div',
        '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
        '.type-wrap'
      );
    }, 500);
    setTimeout(function() {
      createElement(
        'span',
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a contract to instantiate&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">Counter</span></br>', function() {
        setTimeout(function() {
          createElement(
            'span',
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
            '.type-wrap'
          );
          type('<span style="color:#4de4e3">development</span>', function() {
            setTimeout(function() {
              createElement(
                'div',
                '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Added contract Counter</span>',
                '.type-wrap'
              );
              setTimeout(function() {
                createElement(
                  'div',
                  '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
                  '.type-wrap'
                );
                setTimeout(function() {
                  createElement(
                    'div',
                    '<strong>All contracts have been deployed</strong>',
                    '.type-wrap'
                  );
                  setTimeout(function() {
                    createElement(
                      'span',
                      '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Do you want to call a function on </br> the instance after creating it?&nbsp;</span>',
                      '.type-wrap'
                    );
                    setTimeout(function() {
                      type(
                        '<span style="color: white">No</span>',
                        function f4() {
                          setTimeout(function() {
                            createElement(
                              'div',
                              '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Setting everything up to </br> create contract instances</span>',
                              '.type-wrap'
                            );
                            setTimeout(function() {
                              createElement(
                                'div',
                                '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Instance created at </br>0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                                '.type-wrap'
                              );
                            }, 500);
                          }, 500);
                        }
                      );
                    }, 1400);
                  }, 1300);
                }, 1200);
              }, 1000);
            }, 900);
          });
        }, 1000);
      });
    }, 1000);
  }, 1000);
}

(function($) {
  f2();
})(jQuery);
