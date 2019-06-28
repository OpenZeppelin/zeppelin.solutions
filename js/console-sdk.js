function createElement(type = 'span', str, parent) {
  var el = document.createElement(type);
  el.innerHTML = str;
  $('.type-wrap').append(el);
  return el;
}

function type(text, cb = () => {}, opts = {}) {
  var el = createElement('span', '', '.type-wrap');
  $(el).typed({
    strings: ['<span style="color:white">' + text + '</span>'],
    loop: false,
    contentType: 'html',
    loopCount: false,
    callback: cb(),
    showCursor: false,
    typeSpeed: opts.typespeed | 0,
    backSpeed: 0,
    backDelay: 1000,
    loop: false,
  });
}

function f2(done) {
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
                              done();
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

function f3(done) {
  type('$ zos send-tx</br>');
  setTimeout(function() {
    setTimeout(function() {
      createElement(
        'span',
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">development</span></br>', function() {
        setTimeout(function() {
          createElement(
            'span',
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick an instance&nbsp;</span>',
            '.type-wrap'
          );
          type('<span style="color:#4de4e3">Counter at</span>', function() {
            setTimeout(function() {
              createElement(
                'div',
                '<span style="color:#4de4e3">0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                '.type-wrap'
              );
            }, 800);
            setTimeout(function() {
              createElement(
                'div',
                '<span style="color:#87cc37">?</span>&nbsp;<span class="strong">Select which function</span>',
                '.type-wrap'
              );
              type(
                '<span style="color:#4de4e3">increase()</span></br>',
                function() {
                  setTimeout(function() {
                    createElement(
                      'span',
                      '<span style="color:#87cc37">✓</span>&nbsp;<span class="strong">Transaction successful. Transaction hash: </br> 0xd203b6e16f3b6e4922bb19251bd3b90958a7d14c1e</br>1a133631b934e20820d04</span>',
                      '.type-wrap'
                    );
                  }, 1500);
                }
              );
            }, 1500);
          });
        }, 800);
      });
    }, 700);
  }, 1000);
}

(function($) {
  f2(function() {
    setTimeout(function() {
      $('.type-wrap').empty();
      f3();
    }, 2000);
  });
})(jQuery);
