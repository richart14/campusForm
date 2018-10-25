/* global $ */

const totalQuestions = $('.question').size();
const questions = $('.question');
let currentQuestion = 0;

questions.hide();

$(questions.get(currentQuestion)).fadeIn();

let newEntry = {};

$('.entryForm').submit(e => {
  e.preventDefault();
  const form = $(event.currentTarget);
  newEntry[form.find('input').attr('name')] = form.find('input').val();
  if(currentQuestion < totalQuestions-1) {
    currentQuestion++;
    $(form).hide();
    $(questions.get(currentQuestion)).fadeIn();
  }
  console.log(newEntry);
});

$('.selectForm').submit(e=> {
  e.preventDefault();
  const form = $(event.currentTarget);
  newEntry[form.find('select').attr('name')] = form.find('select').val();
  if (currentQuestion < totalQuestions-1) {
    currentQuestion++;
    $(form).hide();
    $(questions.get(currentQuestion)).fadeIn();
  }
  console.log(newEntry);
});

$(document).ready(() => {
  console.log('working');
});