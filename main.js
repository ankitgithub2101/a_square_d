$(document).ready(function() {

    let $randomnbr = $('.nbr'),
        $timer = 30,
        $it,
        $change, 
        $index,
        $data = 0,
        $letters = ['a','&sup2','d' ];

        $randomnbr.each(function() {

            $change = Math.round(Math.random() * 100);
            $(this).attr('data-change', $change)
            
        });

        function random() {
            return Math.round(Math.random() *9);
        }

        function select() {
            return Math.round(Math.random() * $randomnbr.length+1);
        }

        function value() {
            $('.nbr:nth-child('+select()+')').html(''+random()+'');
            $('.nbr:nth-child('+select()+')').attr('data-number', $data);
            $data++;

            $randomnbr.each(function() {

                if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                    $index = $('.ltr').index(this);
                    $(this).html($letters[$index]);
                    $(this).removeClass('nbr');
                }
            });

        }

    it = setInterval(value, $timer );

})

$(document).ready(function() {

    let $randomnbr2 = $('.nbr2'),
        $timer2 = 30,
        $it2,
        $change2, 
        $index2,
        $data2 = 0,
        $letters2 = ['C','O','M','I','N','G','S','O','O','N'];

        $randomnbr2.each(function() {

            $change2 = Math.round(Math.random() * 100);
            $(this).attr('data-change', $change2)
            
        });

        function random() {
            return Math.round(Math.random() *9);
        }

        function select() {
            return Math.round(Math.random() * $randomnbr2.length+1);
        }

        function value() {
            $('.nbr2:nth-child('+select()+')').html(''+random()+'');
            $('.nbr2:nth-child('+select()+')').attr('data-number', $data2);
            $data2++;

            $randomnbr2.each(function() {

                if(parseInt($(this).attr('data-number')) > parseInt($(this).attr('data-change'))) {
                    $index2 = $('.ltr2').index(this);
                    $(this).html($letters2[$index2]);
                    $(this).removeClass('nbr2');
                }
            });

        }

    it2 = setInterval(value, $timer2 );

})
