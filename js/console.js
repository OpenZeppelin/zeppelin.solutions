(function($) {
  setTimeout(function() {
    $('#typed').typed({
      strings: ['[~] $ npm install openzeppelin-solidity'],
      typeSpeed: 5,
      backDelay: 500,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        installing();
      },
    });
  }, 1000);
})(jQuery);

function installing() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('installing').innerHTML = '</br> Installing ';
  }, 500);
  setTimeout(function() {
    $('#typed-installing').typed({
      strings: [
        '<span style="color:#ccc"> [==^300===^100==^50==^200===] 100%</span>',
      ],
      typeSpeed: 5,
      backDelay: 500,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText1and2();
      },
    });
    $('.reset').click(function() {
      $('#typed').typed('reset');
    });
  }, 600);
}

function fixedText1and2() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text').innerHTML =
      '</br> + openzeppelin-solidity@2.1.1</br>';
  }, 200);
  setTimeout(function() {
    $('#typed2').typed({
      strings: ['[~] $ vim ExampleToken.sol^500'],
      typeSpeed: 5,
      backDelay: 500,
      loop: false,
      contentType: 'html', // or text
      // defaults to false for infinite loop
      loopCount: false,
      callback: function() {
        typeVim();
      },
      resetCallback: function() {
        newTyped();
      },
    });
    $('.reset').click(function() {
      $('#typed').typed('reset');
    });
  }, 900);
}

function typeVim() {
  $('#terminal').removeClass('terminal-center');
  $('#terminal-section').removeClass('terminal-section');
  $('#terminal-section').addClass('expanded-terminal-section');
  $('#terminal').addClass('terminal-left');
  $('#terminal2').removeClass('terminal-center');
  $('#terminal2').addClass('terminal-right');
  setTimeout(function() {
    $('#typed-vim').typed({
      strings: [
        [
          '<span style="color: #FC1E70;">pragma</span> solidity <span style="color: #FC1E70;">^^</span><span style="color: #AF7DFF;">0.5.0</span>;',
          '<div style="height:8px"></div><span style="color: #FC1E70;">import</span> <span style="color:#E6DC6D;">"openzeppelin-solidity/contracts/token/<br><span class="mobile-br">&nbsp;</span>ERC20/ERC20.sol"</span>;',
          '<span style="color: #FC1E70;">import</span> <span style="color:#E6DC6D;">"openzeppelin-solidity/contracts/token/<br><span class="mobile-br">&nbsp;</span>ERC20/ERC20Detailed.sol"</span>;',
          '<div style="height:8px"></div><span style="color: #FC1E70;">contract</span> <span style="color:#A5D3F9">ExampleToken</span> is <span style="color:#A5D3F9">ERC20</span>, <span style="color:#A5D3F9">ERC20Detailed</span> {',
          '<span class="terminal-padding"><span style="color:#A5D3F9">uint</span> <span style="color:#FC1E70">private</span> INITIAL_SUPPLY <span style="color: #FC1E70;">=</span><br class="mobile-br"/><span class="mobile-br">&nbsp;</span><span style="color: #AF7DFF;"> 10000e18</span></span>;</span>',
          '<div style="height:8px"></div><span class="terminal-padding"><span style="color: #FC1E70;">constructor</span> () <span style="color: #FC1E70;">public</span>',
          '<span class="terminal-padding2"><span style="color:#A5D3F9">ERC20Detailed</span>(<span style="color:#E6DC6D;">"ExampleToken"</span>, <span style="color:#E6DC6D;">"EGT"</span>, 18)</span>',
          '<span class="terminal-padding">{</span>',
          '<span class="terminal-padding2">_mint(msg.sender, INITIAL_SUPPLY);</span>',
          '<span class="terminal-padding">}^500',
          '}',
        ].join('<br>'),
      ],
      typeSpeed: 0,
      backDelay: 500,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        typeThree();
      },
    });
  }, 900);
}

function typeThree() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    $('#typed3').typed({
      strings: [
        '<br>[~] $ truffle console^500</br>> const myToken = await ExampleToken.new();^500</br>> myToken.totalSupply()',
      ],
      typeSpeed: 5,
      backDelay: 500,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText3();
      },
    });
  }, 2000);
}

function fixedText3() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text3').innerHTML =
      '</br> 10000000000000000000000';
  }, 500);
  setTimeout(function() {
    $('#typed4').typed({
      strings: ['</br>> myToken.transfer(...)'],
      typeSpeed: 5,
      backDelay: 500,
      loop: false,
      contentType: 'html',
      loopCount: false,
      callback: function() {
        fixedText4();
      },
    });
  }, 1000);
}

function fixedText4() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('fixed-text4').innerHTML =
      '</br>true<span style="color: #A5DEF2;">|</span>';
  }, 500);
}
