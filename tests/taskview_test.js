const taskpage = require("../pages/taskpage");

Feature('taskview');

void setFilter(keywordTxt,duedateOption,overdueOption,assignedtoOption,prirotyOption,statusOption,recordsreturnedOptiion)
{
    taskPage.fillKeyword(keywordTxt);
    taskPage.selectDuedate(duedateOption);
    taskPage.selectShowoverdue(overdueOption);
    taskPage.selectAssignedTo(assignedtoOption);
    taskPage.selectPriority(prirotyOption);
    taskPage.selectStatus(statusOption);
    taskPage.selecrecordsReturned(recordsreturnedOptiion);

};


Scenario('TC_TCD_09 : Updation of Priority field in Task View layout',  ({ I,taskPage }) => {
    I.amOnPage('taskpage');
    I.seeInTitle('Tasks');
    I.setFilter('Test','All','Yes','All','Low','All','All');
    taskPage.saveFilter();
    taskPage.selectTask('TestTask');
    taskPage.editTask('High');

});




