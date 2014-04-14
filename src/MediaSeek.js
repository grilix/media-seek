(function (root) {
  root.MediaSeek = function (element, seek) {
    this.mediaElement = element;

    if (seek) {
      this.attachSeek(seek);
    }
  };

  root.MediaSeek.prototype.parseTextTime = function (textTime) {
    var timeParts = textTime.split(":"),
      seconds = 0, minutes = 0, hours = 0;
    switch (timeParts.length) {
    case 3:
      hours = parseInt(timeParts.shift(), 10);
    case 2:
      minutes = parseInt(timeParts.shift(), 10);
    case 1:
      seconds = parseInt(timeParts.shift(), 10);
    }
    return seconds + (minutes * 60) + (hours * 3600);
  };

  root.MediaSeek.prototype.attachSeek = function (seek) {
    var listItems = seek.querySelectorAll("li"),
        self = this;

    [].forEach.call(listItems, function (listItem) {
      listItem.addEventListener("click", function (event) {
        var time = self.timeFromItem(listItem);
        self.seekToTime(time);
      });
    });
  };

  root.MediaSeek.prototype.timeFromItem = function (item) {
    var timeElement = item.querySelector(".time");

    return this.parseTextTime(timeElement.textContent);
  };

  root.MediaSeek.prototype.seekToTime = function (time) {
    this.mediaElement.currentTime = time;
  };

})(window);
