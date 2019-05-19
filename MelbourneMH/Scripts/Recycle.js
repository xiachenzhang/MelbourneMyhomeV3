$(document).ready(function () {
    $(function () {
        var result = {};
        $(".draggable").draggable({
            start: function (e) {
                result.drag = e.target.id.split("_")[1];
            }
        });
        $(".item").droppable({
            drop: function (event, ui) {
                var $this = $(this);
                result.drop = event.target.id.split("_")[1];
                if (result.drag === result.drop) {
                    function change() {
                        $($this).find('#drag-elem_1').addClass("correct");
                        $($this).find('#drag-elem_2').addClass("correct");
                        $($this).find('#drag-elem_3').addClass("correct");
                        $($this).find('#drag-elem_4').addClass("correct");
                    }
                    $(".correct-title").fadeIn().delay(1000).fadeOut();
                    setTimeout(change, 100);
                } else {
                    $(".wrong-title").fadeIn().delay(1000).fadeOut();
                }
                $this.append(ui.draggable);
                var width = $this.width();
                var height = $this.height();
                var cntrLeft = (width / 2) - (ui.draggable.width() / 2);
                var cntrTop = (height / 2) - (ui.draggable.height() / 2);
                ui.draggable.css({
                    left: cntrLeft + "px",
                    top: cntrTop + "px"
                });
            }
        });
    });
});