import Barba from 'barba.js'
import Facotry from '../Factory';
class BarbaTranistion {
    constructor()
    {
        Barba.Pjax.start();

        var HideShowTransition = Barba.BaseTransition.extend({
            start: function() {

                $('.nav').hide().removeClass('open');
                $('.curtain-2').css('zIndex', '9999');
                TweenMax.to('.even', 1, {
                    transform: 'translateX(0)',

                });
                TweenMax.to('.odd', 1, {
                    transform: 'translateX(0)',
                    onComplete: this.newc.bind(this)

                });



            },
            newc: function(){
                //tweenFinish()
                TweenMax.to('.odd', 1, {
                    transform: 'translateX(-100%)',
                });
                TweenMax.to('.even', 1, {
                    transform: 'translateX(100%)',
                    onComplete: zIndex
                });
                function zIndex() {
                    $('.curtain-2').css('zIndex', '-1');
                }
                this.newContainerLoading.then(this.finish.bind(this))

            },

            finish: function() {
                document.body.scrollTop = 0;
                this.done();
                new Facotry();
            }
        });
        /**
         * Next step, you have to tell Barba to use the new Transition
         */

        Barba.Pjax.getTransition = function() {
            return HideShowTransition;



        };

        Barba.Dispatcher.on('newPageReady', function(currentStatus, oldStatus, container) {

            // use finish function instead
        });




    }
}

export default BarbaTranistion;