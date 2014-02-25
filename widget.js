WAF.define('FaceDetection', ['waf-core/widget'], function(widget) {

    var FaceDetection = widget.create('FaceDetection', {
        //    	  url: widget.property({
        //            type: 'string',
        //            defaultValue: 'img/face.jpg'
        //        }),
        init: function() {

//             this.node.innerHTML = '<a href="#" id="detect">Click to detect faces</a><br><br><input class="no-border" id="url-image" type="text"><input id="url-detect" type="button" value="Detect"><br><img src="img/face.jpg"/>';
            this.node.innerHTML = '<a href="#" id="detect">Click to detect faces</a><br><br><input class="no-border" id="url-image" type="text"><input id="url-detect" type="button" value="Load Image"><br>';
            var $node = this.node;

            var $a = $('a', this.node);

           
            $input = $('#url-detect', this.node);
            $input.on('click', function(event) {
                $('<img>', {
                    'src': document.getElementById("url-image").value 
                }).appendTo($node);
                
            });

            $a.on('click', function(event) {

                var $img = $('img', $node);
                var coords = $img.faceDetection();
                console.log(coords);
                for (var i = 0; i < coords.length; i++) {

                    
                    $('<div>', {
                        'class': 'face',
                        'css': {
                            'position': 'absolute',
                            'left': coords[i].positionX + 'px',
                            'top': coords[i].positionY + 'px',
                            'width': coords[i].width + 'px',
                            'height': coords[i].height + 'px'
                        }
                    }).appendTo($node);
                }
            });
        }

    });


    return FaceDetection;

});