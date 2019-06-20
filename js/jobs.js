(function($) {
  function jobs() {
    var activeBoxId = 'all-positions';
    var boxSel = '.opening-box-listing';
    var itemSel = '.positions-list-item';

    function handler() {
      $(itemSel).click(function handler(evt) {
        var boxId = $(this).data('id');
        setActive(boxId);
      });
    }

    function hideActive() {
      $(itemSel).removeClass('active');
      $(boxSel).removeClass('active');
    }

    function setActive(boxId) {
      activeBoxId = boxId;
      hideActive();
      $(boxSel + '#' + boxId).addClass('active');
      $(itemSel + '[data-id=' + boxId + ']').addClass('active');
    }

    return (function() {
      setActive(activeBoxId);
      handler();
    })();
  }

  function init() {
    jobs();
  }

  $(document).ready(function() {
    init();
  });
})(jQuery);
