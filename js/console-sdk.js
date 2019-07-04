var typeWrap = $('.type-wrap.running-animation');

function createElement(type = 'span', props, str, parent) {
  var parent = parent || typeWrap;
  var el = document.createElement(type);

  if (props && 'object' === typeof props) {
    Object.keys(props).forEach((p) => {
      // Adding attributes
      if (attrs.includes(p)) {
        el.setAttribute(p, props[p]);
      }
    });
  }

  el.innerHTML = str;

  if (parent) {
    $(parent).append(el);
  }

  return el;
}

function implementProps(props, e) {}

function type(text, cb = () => {}, opts = {}) {
  var el = createElement('span', null, '', '.type-wrap');
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
        null,
        '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
        '.type-wrap'
      );
    }, 500);
    setTimeout(function() {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a contract to instantiate&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">Counter</span></br>', function() {
        setTimeout(function() {
          createElement(
            'span',
            null,
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
            '.type-wrap'
          );
          type('<span style="color:#4de4e3">development</span>', function() {
            setTimeout(function() {
              createElement(
                'div',
                null,
                '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Added contract Counter</span>',
                '.type-wrap'
              );
              setTimeout(function() {
                createElement(
                  'div',
                  null,
                  '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
                  '.type-wrap'
                );
                setTimeout(function() {
                  createElement(
                    'div',
                    null,
                    '<strong>All contracts have been deployed</strong>',
                    '.type-wrap'
                  );
                  setTimeout(function() {
                    createElement(
                      'span',
                      null,
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
                              null,
                              '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Setting everything up to </br> create contract instances</span>',
                              '.type-wrap'
                            );
                            setTimeout(function() {
                              createElement(
                                'div',
                                null,
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
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">development</span></br>', function() {
        setTimeout(function() {
          createElement(
            'span',
            null,
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick an instance&nbsp;</span>',
            '.type-wrap'
          );
          type('<span style="color:#4de4e3">Counter at</span>', function() {
            setTimeout(function() {
              createElement(
                'div',
                null,
                '<span style="color:#4de4e3">0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                '.type-wrap'
              );
            }, 800);
            setTimeout(function() {
              createElement(
                'div',
                null,
                '<span style="color:#87cc37">?</span>&nbsp;<span class="strong">Select which function</span>',
                '.type-wrap'
              );
              type(
                '<span style="color:#4de4e3">increase()</span></br>',
                function() {
                  setTimeout(function() {
                    createElement(
                      'span',
                      null,
                      '<span style="color:#87cc37">✓</span>&nbsp;<span class="strong">Transaction successful. Transaction hash: </br> 0xd203b6e16f3b6e4922bb19251bd3b90958a7d14c1e</br>1a133631b934e20820d04</span>',
                      '.type-wrap'
                    );
                    done();
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

function f4(done) {
  type('$ zos call</br>');
  setTimeout(function() {
    setTimeout(function() {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">development</span></br>', function() {
        setTimeout(function() {
          createElement(
            'span',
            null,
            '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick an instance&nbsp;</span>',
            '.type-wrap'
          );
          type('<span style="color:#4de4e3">Counter at</span>', function() {
            setTimeout(function() {
              createElement(
                'div',
                null,
                '<span style="color:#4de4e3">0xCfEB869F69431e42cdB54A4F4f105C19C080A601</span>',
                '.type-wrap'
              );
            }, 800);
            setTimeout(function() {
              createElement(
                'div',
                null,
                '<span style="color:#87cc37">?</span>&nbsp;<span class="strong">Select which function</span>',
                '.type-wrap'
              );
              type(
                '<span style="color:#4de4e3">increase()</span></br>',
                function() {
                  setTimeout(function() {
                    createElement(
                      'span',
                      null,
                      '<span style="color:#87cc37">✓</span>&nbsp;<span class="strong">Method \'value()\' returned: 1</span>',
                      '.type-wrap'
                    );
                    done();
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

function f5(done) {
  type('$ zos upgrade</br>');
  $('.typed-cursor').css('color', 'black');
  setTimeout(function() {
    setTimeout(function() {
      createElement(
        'span',
        null,
        '<span style="color:#87cc37">✓</span>&nbsp;<span style="color:white">Pick a network&nbsp;</span>',
        '.type-wrap'
      );
      type('<span style="color:#4de4e3">development</span>', function() {
        setTimeout(function() {
          createElement(
            'div',
            null,
            '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Compiled contracts with solc 0.5.9 </br> (commit.e560f70d)</span>',
            '.type-wrap'
          );
          createElement(
            'div',
            null,
            '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Contract Counter deployed</span>',
            '.type-wrap'
          );
          setTimeout(function() {
            createElement(
              'div',
              null,
              '<strong>All contracts have been deployed</strong>',
              '.type-wrap'
            );
            setTimeout(function() {
              createElement(
                'span',
                null,
                '<span class="tc-green">?</span>&nbsp;<span class="tc-strong">Which instances would you like to upgrade?&nbsp;</span></br>',
                '.type-wrap'
              );
              setTimeout(function() {
                type(
                  '<span style="color: white">All instances</span>',
                  function() {
                    setTimeout(function() {
                      setTimeout(function() {
                        createElement(
                          'div',
                          null,
                          '<span class="tc-green">✓</span>&nbsp;<span class="tc-violet">Instance upgraded at </br>0xCfEB869F69431e42cdB54A4F4f105C19C080A601.</br> Transaction receipt: </br>0x56363451719e42a4dab366f450c4130387aa3413.</span>',
                          '.type-wrap'
                        );
                        done();
                      }, 500);
                    }, 500);
                  }
                );
              }, 1400);
            }, 1200);
          }, 1000);
        }, 900);
      });
    }, 1000);
  }, 1000);
}

(function($) {
  var animation = null;

  function initAnimation() {
    return setTimeout(function() {
      f2(function() {
        setTimeout(function() {
          typeWrap.empty();
          f3(function() {
            setTimeout(function() {
              typeWrap.empty();
              f4(function() {
                typeWrap.empty();
                f5(function() {
                  console.log('Animation done');
                });
              });
            }, 2000);
          });
        }, 2000);
      });
    }, 0);
  }

  function init() {
    $('.term__menu-list__item').click(function() {
      clearTimeout(animation);
      $('.type-wrap').remove();
      $('.wrap').append(createElement('div'));
    });
  }

  //
  init();
  animation = initAnimation();
})(jQuery);
