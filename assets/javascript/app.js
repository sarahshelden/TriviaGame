// question'
// options
// answer
// user answer

$('#start').on('click', function() {
    game.start();

});

var questions = [{

    question: "In our solar system, which planet has the shortest day?",
    answers:['Jupiter', 'Mars', 'Pluto', 'Saturn'],
    correctAnswer: 'Jupiter'

}, {

    question: " What common kitchen item is made up of sodium and chlorine atoms?",
    answers:['Gold', 'Silver', 'Tin', 'Salt'],
    correctAnswer: 'Neuron'

}, {

    question: "What is the name for the specialized nerve cell that transmits information chemically and electrically throughout the body? ",
    answers: ['Atom', 'Synapse', 'Neuron', 'Molecule'],
    correctAnswer: 'Neuron'


}, {
    question:" When found on a vehicle's speedometer, what do the letters MPH stand for",
    answers: ['Miles Per Hour', 'Minutes Per Hour', 'Milliseconds per Hour', 'Kilometers per Hour'],
    correctAnswer: 'Miles Per Hour'

}, {
    question:"The molecule 'hemoglobin' is used in which type of cells? ",
    answers: ['Red Blood Cells', 'White Blood Cells', 'Carbon Dioxide', 'Harlem Globe Trotters'],
    correctAnswer: 'Red Blood Cells'

}, {
    question:" Penicillin was discovered in 1928 by which Scottish scientist?",
    answers: ['Albert Einstein', 'Sir Alexander Flemming', 'Marie Curie', 'Stephen Hawking'],
    correctAnswer: ''


}, {
    question:"Bronze is an alloy consisting primarily of what two elements?",
    answers: ['Gold and Silver', 'Hydrogen and Oxygen', 'Magnesium and Copper', 'Copper and Tin'],
    correctAnswer: 'Copper and Tin'

}, {
    question:"Who developed and patented the electrical telegraph in the United States in 1837?",
    answers: ['Galileo', 'Samuel Morse', 'Charles Darwin', 'Nikola Tesla'],
    correctAnswer: 'Samuel Morse'

}];

var game;
game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function () {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time is Up!");
            game.done();
        }
    },

    start: function () {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2> Time Remaining: <span id ="counter">120</span> Seconds </h2>');
                $('#start').remove();
                for (var i = 0; i < questions.length; i++) {
                    $('#subwrapper').append('<h2>' + questions[i].question + '</h2>');
                    for (var s = 0; s < questions[i].answers.length; s++) {
                        $('#subwrapper').append("<input type = 'radio' name='question-" + i + "' value ='" + questions[i].answers[s] + "'>" + questions[i].answers[s])
                    }
                }

            },

            done: function () {
            $.each($('input [name="question-0]":checked'), function () {
                if($(this).val()==questions[1].correctAnswer){
                    game.correct++;
                } else {
                    game.incorrect++;
                }
            })
        }

        }





}

