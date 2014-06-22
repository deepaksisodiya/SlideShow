/**
 * Created by ist-91 on 14/6/14.
 */

(function () {
    "use strict";
//var imageArray = ["http://www.pikachoose.com/wp-content/uploads/main-demo/1.jpg", "http://www.pikachoose.com/wp-content/uploads/main-demo/2.jpg", "http://www.pikachoose.com/wp-content/uploads/main-demo/3.jpg"]

    var imageArray = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
    var obj1 = new App.SlideShow(imageArray, $("#slideshowModule1"));
    var obj2 = new App.SlideShow(imageArray, $("#slideshowModule2"));

})();

