/**
 * Created by ist-91 on 14/6/14.
 */

var App = {};

(function () {
    "use strict";
    App.SlideShow = function(imageArray, ele) {
        this.imageArray = imageArray;
        this.$el = ele;
        this.currentImageIndex = 0;
        this.loadTemplate();
        this.loadImage();
        this.addEventHandlers();

    };
    App.SlideShow.prototype = {
        addEventHandlers : function () {
            console.log("i running from addEventHandlers");
            var self = this;
            this.$el.find("#nextButton").click(function () {
                console.time("nextSlide");
                self.nextSlide();
                console.timeEnd("nextSlide");
            });
            this.$el.find("#preButton").click(function () {
                self.preSlide();
            });
            this.$el.find("#firstSlide").click(function () {
                self.firstSlide();
            });
            this.$el.find("#lastSlide").click(function () {
                self.lastSlide();
            });
        },
        loadTemplate: function () {
            var str = $("#SlideshowTemplate").html();
            this.$el.html(str);
            this.imageArrayEle =  this.$el.find("#images_id");
        },
        nextSlide: function () {
            this.currentImageIndex++;
            if (this.currentImageIndex === this.imageArray.length) {
                this.currentImageIndex = 0;
            }
            this.loadImage();
        },
        preSlide: function () {
            this.currentImageIndex--;
            if (this.currentImageIndex === -1) {
                this.currentImageIndex = this.imageArray.length - 1;
            }
            this.loadImage();
        },
        firstSlide:function () {
            this.currentImageIndex = 0;
            this.loadImage();
        },
        lastSlide:function () {
            this.currentImageIndex = this.imageArray.length - 1;
            this.loadImage();
        },
        loadImage: function () {
            this.imageArrayEle.attr('src', this.imageArray[this.currentImageIndex]);
        }
    };
})();