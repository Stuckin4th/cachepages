// Edit this file, then run: ./scripts/minify-quiz.sh
!function () {
  const e = 139, t = 151, i = 180;
  const expected = [e, t, i];
  const questions = document.getElementById("questions");
  const coords = document.getElementById("coords");
  const subtitlePrompt = document.getElementById("subtitle-prompt");
  const subtitleComplete = document.getElementById("subtitle-complete");
  const inputs = document.querySelectorAll("#questions input");
  const answerSpans = document.querySelectorAll("#quiz-answer-complete li span");

  function decoded(input) {
    return parseInt(input.value, 10) ^ 0xa5;
  }

  function decodedAnswer(encoded) {
    return encoded ^ 0xa5;
  }

  function inputIndex(input) {
    return Array.prototype.indexOf.call(inputs, input);
  }

  function fieldError(input) {
    return input.closest(".question-card").querySelector(".field-error");
  }

  function setFieldState(input, showError) {
    const error = fieldError(input);
    if (showError) {
      error.classList.remove("hidden");
      input.classList.add("is-incorrect");
    } else {
      error.classList.add("hidden");
      input.classList.remove("is-incorrect");
    }
  }

  function validateField(input) {
    if (!input.value.trim()) {
      setFieldState(input, false);
      return;
    }
    setFieldState(input, decoded(input) !== expected[inputIndex(input)]);
  }

  function checkQuiz() {
    const complete =
      decoded(inputs[0]) === e &&
      decoded(inputs[1]) === t &&
      decoded(inputs[2]) === i;
    questions.classList.toggle("hidden", complete);
    coords.classList.toggle("hidden", !complete);
    subtitlePrompt.classList.toggle("hidden", complete);
    subtitleComplete.classList.toggle("hidden", !complete);
    if (complete) {
      answerSpans.forEach(function (span, index) {
        span.textContent = String(decodedAnswer(expected[index]));
      });
    }
  }

  inputs.forEach(function (input) {
    input.addEventListener("input", function () {
      setFieldState(input, false);
      checkQuiz();
    });
    input.addEventListener("blur", function () {
      validateField(input);
    });
  });
}();
