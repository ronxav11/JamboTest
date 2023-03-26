const { I } = inject();

module.exports={


    locators:{

       // locator for the keyword text area 
       searchKeywordtxt : "#searchKeyword",
       
        // locator for the dudedate section
       duedateSection : '//duedate',

       // locator for the show overdue checkbox
       showoverdueChkbx : '#showchkbx',

       // locator for the assignedTo section
       asssignedtoSection : '//assignedTo',

       // locator for the priority section
       priorityAll : '#priorityallfield',
       priorityNone : '#prioritynonefield',
       priorityLow : '#lowChkbx',
       priorityMedium : '#mediumChkbx',
       priorityHigh : '#highChkbx',

       // locator for the status section
       statusSection : '//assignedTo',

        // locator for the records to be returned section
       recordsreturnedSection : '//recordsReturned',

       //locator for filter save button
       savefilterButton : '#saveFilter',

       //locator for task Id in the task view card
       taskidField : '#taskId',

       //locator for edit button in task card
       editButton : '#taskEdit',

       //locator for task save button
       savetaskButton : '#saveTask',

    },


    //method to fill in the text for keyword search
    fillKeyword(searchText)
    {
        I.fillField(this.locators.searchKeywordtxt,searchText);
    },

    //method to select the due date 
    selectDuedate(duedateInput)
    {   
        switch(duedateInput)
        {
            case 'All': 
                I.checkOption('All', duedateSection);
                console.log('Due Date selected to All');
                break;
            case 'Today': 
                I.checkOption('Today', duedateSection);
                console.log('Due Date selected to Today');
                break;
            case 'This Week' :
                I.checkOption('This Week', duedateSection);
                console.log('Due Date selected to This Week');
                break;
            case 'This Month' :
                I.checkOption('This Month', duedateSection);
                console.log('Due Date selected to This Month');
                break;
        }
        
    },

    //method to check in the showoverdue checkbox
    selectShowoverdue(showoverdueText)
    {

        var assert = require('assert');
        if (assert.equal(showoverdueText, 'Yes'))
        {
            if(I.dontSeeCheckboxIsChecked(this.locators.showoverdueChkbx))
                {
                    I.checkOption(this.locators.showoverdueChkbx);
                    console.log('Checkbox is checked')    
                }
        }
        else
        {
            if (I.SeeCheckboxIsChecked(this.locators.showoverdueChkbx))
                {
                    I.checkOption(this.locators.showoverdueChkbx);
                    console.log('Checkbox is unchecked')
                }       
        }
    },


    //method to select the assigned to
    selectAssignedTo(assignedtoText)
    {
        switch(assignedtoText)
        {
            case 'All': 
                I.checkOption('All', asssignedtoSection);
                console.log('Assigned To selected to All');
                break;
            case 'Me': 
                I.checkOption('Me', asssignedtoSection);
                console.log('Assigned To selected to Me');
                break;
            case 'Unassigned' :
                I.checkOption('Unassigned', asssignedtoSection);
                console.log('Assigned To selected to Unassigned');
                break;
            
        }
    },

    //method to select the priority
    selectPriority(prioritytext)
    {
        switch(prioritytext)
        {
            case 'All': 
                I.click(this.locators.priorityAll)
                console.log('Assigned To selected to All');
                I.seeCheckboxIsChecked(this.locators.priorityLow)
                I.seeCheckboxIsChecked(this.locators.priorityMedium)
                I.seeCheckboxIsChecked(this.locators.priorityHigh)
                break;
            case 'None': 
                I.click(this.locators.priorityNone);
                console.log('Assigned To selected to None');
                I.dontseeCheckboxIsChecked(this.locators.priorityLow)
                I.dontseeCheckboxIsChecked(this.locators.priorityMedium)
                I.dontseeCheckboxIsChecked(this.locators.priorityHigh)
                break;
            case 'Low' :
                I.click(this.locators.priorityNone);
                I.checkOption(this.locators.priorityLow);
                I.seeCheckboxIsChecked(this.locators.priorityLow)
                I.dontseeCheckboxIsChecked(this.locators.priorityMedium)
                I.dontseeCheckboxIsChecked(this.locators.priorityHigh)
                console.log('Assigned To selected to Low');
                break;
            case 'Medium' :
                I.click(this.locators.priorityNone);
                I.checkOption(this.locators.priorityMedium);
                I.dontseeCheckboxIsChecked(this.locators.priorityLow)
                I.seeCheckboxIsChecked(this.locators.priorityMedium)
                I.dontseeCheckboxIsChecked(this.locators.priorityHigh)
                console.log('Assigned To selected to Medium');
                break;
            case 'High' :
                I.click(this.locators.priorityNone);
                I.checkOption(this.locators.priorityHigh);
                I.dontseeCheckboxIsChecked(this.locators.priorityLow)
                I.dontseeCheckboxIsChecked(this.locators.priorityMedium)
                I.seeCheckboxIsChecked(this.locators.priorityHigh)
                console.log('Assigned To selected to High');
                break;
        }

    },

    //method to select the status
    selectStatus(StatusText)
    {
        switch(StatusText)
        {
            case 'All': 
                I.checkOption('All', statusSection);
                console.log('Assigned To selected to All');
                break;
            case 'Complete': 
                I.checkOption('Complete', statusSection);
                console.log('Assigned To selected to Complete');
                break;
            case 'Not Complete' :
                I.checkOption('Not Complete', statusSection);
                console.log('Assigned To selected to Not Complete');
                break;
            
        }
    },

    //method to select the records to be returned
    selecrecordsReturned(recordsreturnedtext)
    {
        switch(recordsreturnedtext)
        {
            case 'All': 
                I.checkOption('All', recordsreturnedSection);
                console.log('Assigned To selected to All');
                break;
            case 'Active': 
                I.checkOption('Active', recordsreturnedSection);
                console.log('Assigned To selected to Active');
                break;
            case 'Deleted' :
                I.checkOption('Deleted', recordsreturnedSection);
                console.log('Assigned To selected to Deleted');
                break;
            
        }
    },

    //method to save the filter panel
    saveFilter()
    {
        I.click(savefilterButton);
        I.saveScreenshot(savedfilter.png);
    },

    //method to select the task from the grid View
    selectTask(taskId)
    {
        I.click(taskId)
        I.seeInField(taskidField,taskId);
        console.log('The task has been successfully selected');
        I.saveScreenshot(taskselection.png);
    },

    //method to edit/update the task
    editTask(newPriority)
    {
        I.click(editButton);
        I.waitForClickable(savetaskButton);
        I.selectOption('Priority',newPriority)
        I.click(savetaskButton);
        I.saveScreenshot(edittask.png);
    },

    //method to compare task details
    
}