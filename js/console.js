var comands = ['zos create'](
  // ✓ Compiled contracts with solc 0.5.9 (commit.e560f70d)
  // ? Pick a contract to instantiate Counter
  // ? Pick a network development
  // ✓ Added contract Counter
  // ✓ Contract Counter deployed
  // All contracts have been deployed
  // ? Do you want to call a function on the instance after creating it? No
  // ✓ Setting everything up to create contract instances
  // ✓ Instance created at 0xCfEB869F69431e42cdB54A4F4f105C19C080A601
  // 0xCfEB869F69431e42cdB54A4F4f105C19C080A601

  // $:contracts rrecuero$ zos send-tx
  // ? Pick a network development
  // ? Pick an instance Counter at 0xCfEB869F69431e42cdB54A4F4f105C19C080A601
  // ? Select which function increase()
  // ✓ Transaction successful. Transaction hash: 0xd203b6e16f3b6e4922bb19251bd3b90958a7d14c1e21a133631b934e20820d04

  // $:contracts rrecuero$ zos call
  // ? Pick a network development
  // ? Pick an instance Counter at 0xCfEB869F69431e42cdB54A4F4f105C19C080A601
  // ? Select which function value()
  // ✓ Method 'value()' returned: 1
  // 1
  // $:contracts rrecuero$ zos upgrade
  // ? Pick a network development
  // ✓ Compiled contracts with solc 0.5.9 (commit.e560f70d)
  // ✓ Contract Counter deployed
  // All contracts have been deployed
  // ? Which instances would you like to upgrade? All instances
  // ✓ Instance upgraded at 0xCfEB869F69431e42cdB54A4F4f105C19C080A601. Transaction receipt: 0x56363451719e42a4dab366f450c4130387aa341bd068925de49705a621ab4053

  function($) {
    (function($) {
      setTimeout(function() {
        $('#sdk-typed').typed({
          strings: ['zos create'],
          typespeed: 800,
          backdelay: 0,
          loop: false,
          contentType: 'html',
          loopCount: false,
          callback: function() {
            installing();
          },
        });
      }, 1000);
    })(jQuery);

    setTimeout(function() {
      $('#typed').typed({
        strings: ['[~] $ npm install openzeppelin-solidity'],
        typespeed: 800,
        backdelay: 0,
        loop: false,
        contentType: 'html',
        loopCount: false,
        callback: function() {
          installing();
        },
      });
    }, 1000);
  }
)(jQuery);

function installing() {
  $('.terminal .typed-cursor').css('color', 'black');
  setTimeout(function() {
    document.getElementById('installing').innerHTML = '</br> Installing ';
  }, 500);
  setTimeout(function() {
    $('#typed-installing').typed({
      strings: [
        '<span style="color:#BDBADB"> [==^300===^100==^50==^200===] 100%</span>',
      ],
      typespeed: 800,
      backDelay: 0,
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
      typespeed: 800,
      backdelay: 0,
      loop: false,
      contentType: 'html',
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
  // $('#terminal-section').removeClass('terminal-section');
  // $('#terminal-section').addClass('expanded-terminal-section');
  $('.p-animated').addClass('expanded');
  $('#terminal').addClass('terminal-left');
  $('#terminal2').removeClass('terminal-center');
  $('#terminal2').addClass('terminal-right');
  setTimeout(function() {
    $('#typed-vim').typed({
      strings: [
        [
          '<span style="color: #D26696;">pragma</span> solidity <span style="color: #D26696;">^^</span><span style="color: #AF7DFF;">0.5.0</span>;',
          '<div style="height:8px"></div><span style="color: #D26696;">import</span> <span style="color:#F6D8A0;">"openzeppelin-solidity/contracts/token/<br><span class="mobile-br">&nbsp;</span>StandardToken.sol"</span>;',
          '<div style="height:8px"></div><span style="color: #D26696;">contract</span> <span style="color:#788DD1">ExampleToken</span> is <span style="color:#788DD1">StandardToken</span> {',
          '<span class="terminal-padding"><span style="color:#788DD1">string</span> <span style="color:#D26696">public</span> NAME <span style="color: #D26696;">=</span><br class="mobile-br"/><span class="mobile-br">&nbsp;</span><span style="color: #AF7DFF;">&nbsp;"ExampleToken"</span></span>;</span>',
          '<span class="terminal-padding"><span style="color:#788DD1">string</span> <span style="color:#D26696">public</span> SYMBOL <span style="color: #D26696;">=</span><br class="mobile-br"/><span class="mobile-br">&nbsp;</span><span style="color: #AF7DFF;">&nbsp;"EGT"</span></span>;</span>',
          '<span class="terminal-padding"><span style="color:#788DD1">uint</span> <span style="color:#D26696">public</span> DECIMALS <span style="color: #D26696;">=</span><br class="mobile-br"/><span class="mobile-br">&nbsp;</span><span style="color: #AF7DFF;">&nbsp;18</span></span>;</span>',
          '<span class="terminal-padding"><span style="color:#788DD1">uint</span> <span style="color:#D26696">public</span> INITIAL_SUPPLY <span style="color: #D26696;">=</span><br class="mobile-br"/><span class="mobile-br">&nbsp;</span><span style="color: #AF7DFF;">&nbsp;10000</span></span>;</span>',
          '<div style="height:8px"></div><span class="terminal-padding"><span style="color: #788DD1;">function</span><span style="color: #D26696;">&nbsp;ExampleToken&nbsp;</span>{',
          '<span class="terminal-padding2"><span style="color:#ccc;">totalSupply</span><span style="color:#eee;"><span style="color: #D26696;">&nbsp;=&nbsp;</span>INITIAL_SUPPLY</span>;</span>',
          '<span class="terminal-padding2"><span style="color:#ccc;">balances[msg.sender]</span><span style="color:#eee;"><span style="color: #D26696;">&nbsp;=&nbsp;</span>INITIAL_SUPPLY</span>;</span>',
          '<span class="terminal-padding">}^500',
          '}',
        ].join('<br>'),
      ],
      typespeed: 800,
      backdelay: 0,
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
      typespeed: 800,
      backdelay: 0,
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
      typespeed: 800,
      backdelay: 0,
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
      '</br>true<span style="color: #5FD9F0;">|</span>';
  }, 500);
}
