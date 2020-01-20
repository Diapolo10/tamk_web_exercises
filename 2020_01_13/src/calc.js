//'use strict';

function multiply(nums) {
    var result = (nums.length > 0 ? nums[0] : 0);
    for (const num of nums.slice(1)) {
        result *= num;
    }
    return result;
}

window.onload = function() {

    function init_math(self) {
        var rows = "";
        for (var i = 1; i <= self.calc_count; ++i) {

            while (true) {
                var nums = []
            
                for (var j = 0; j < self.operand_count; ++j) {
                    nums.push(Math.floor(Math.random() * (-self.num_limits[0]+self.num_limits[1])) - self.num_limits[0]);
                }

                if (self.pairs.includes(nums)) {
                    continue;
                }

                else {
                    self.pairs.push(nums);
                    self.solutions.push(multiply(nums));
                    break;
                }

            }

            var expression = self.pairs[i-1].join(' * ');
            rows += `\n\t\t\t<p><label id='calc${i}'>${expression}&nbsp;</label><input id='answer${i}' type='number'></p>`;
        }
        document.getElementById("calculations").innerHTML = rows;
    }

    function check_answers(self) {
        var element = document.getElementById("calculations");
        var correct = 0;
        for(var idx = 0; idx < self.calc_count; ++idx) {
            child = document.getElementById(`answer${idx+1}`);

            if (parseInt(child.value) === self.solutions[idx]) {
                child.insertAdjacentHTML('afterend', '<label class="good_answer">&nbsp;;-)</label>');
                ++correct;

            } else {
                child.insertAdjacentHTML('afterend', '<label class="bad_answer">&nbsp;:-(</label>');

            }
        }

        document.getElementById('total_points').innerHTML = ` You got ${correct}/${idx} correct!`;
    }

    function clear(self) {
        document.getElementById("calculations").innerHTML = '';
        document.getElementById("total_points").innerHTML = '';
        self.pairs = [];
        self.solutions = [];
    }

    state = {
        'calc_count': 3,
        'num_limits': [0,10],
        'operand_count': 2,
        'difficult': false,
        'pairs': [],
        'solutions': [] 
    };

    init_math(state);

    document.getElementById("check").onclick = function(){check_answers(state)};
    document.getElementById("restart").onclick = function(){clear(state);init_math(state)};
    document.getElementById("save_settings").onclick = function(){
        state.operand_count = parseInt(document.getElementById("operands").value);
        clear(state);
        init_math(state);
    }
    document.getElementById("difficulty").onclick = function(){
        state.difficult = !state.difficult;
        state.calc_count = state.difficult ? 12 : 3;
        state.num_limits = state.difficult ? [-100, 100] : [0, 10];
        document.getElementById('difficulty').innerHTML = state.difficult ? "Easy Mode" : "Hard Mode";
        console.log(`Changed difficulty to ${state.difficult ? "hard" : "easy"}`)
        clear(state);
        init_math(state);
    };
    var coll = document.getElementsByClassName("collapsible");

    for (var i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }

}