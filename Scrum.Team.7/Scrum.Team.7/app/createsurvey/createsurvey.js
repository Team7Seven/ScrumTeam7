(function () {
    'use strict';
    var controllerId = 'createsurvey';
    angular.module('app').controller(controllerId, ['common', 'datacontext', createsurvey]);

    function createsurvey(common) {
        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(controllerId);

        var vm = this;
        vm.title = 'createsurvey';

        vm.surveyDetails = [];
        activate();

        function activate() {
            common.activateController([], controllerId)
            .then(function () { log('Activated Create Survey View'); }); 
        }

        vm.surveyAdd = function(){
            vm.surveyDetails.push({surveyName:vm.surveyName, surveyDescription:vm.surveyDescription, surveyCompletionMessage:vm.surveyCompletionMessage});
            vm.surveyName = "";
            vm.surveyDescription = "";
            vm.surveyCompletionMessage = "";
        };

        vm.today = function() {
            vm.dt = new Date();
        };
        vm.today();

        vm.clear = function () {
            vm.dt = null;
        };

        // Disable weekend selection
        vm.disabled = function(date, mode) {
            return ( mode === 'day' && ( date.getDay() === 0 || date.getDay() === 6 ) );
        };

        vm.toggleMin = function() {
            vm.minDate = vm.minDate ? null : new Date();
        };

        vm.toggleMin();
        vm.maxDate = new Date(2020, 5, 22);

        vm.open = function($event) {
            vm.status.opened = true;
        };

        vm.setDate = function(year, month, day) {
            vm.dt = new Date(year, month, day);
        };

        vm.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };

        vm.formats = ['dd-MMMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate'];
        vm.format = vm.formats[0];

        vm.status = {
            opened: false
        };

        var tomorrow = new Date();
        tomorrow.setDate(tomorrow.getDate() + 1);
        var afterTomorrow = new Date();
        afterTomorrow.setDate(tomorrow.getDate() + 2);
        vm.events =
        [
        {
            date: tomorrow,
            status: 'full'
        },
        {
            date: afterTomorrow,
            status: 'partially'
        }
        ];

        vm.getDayClass = function(date, mode) {
            if (mode === 'day') {
              var dayToCheck = new Date(date).setHours(0,0,0,0);

              for (var i=0;i<vm.events.length;i++){
                var currentDay = new Date(vm.events[i].date).setHours(0,0,0,0);

                if (dayToCheck === currentDay) {
                  return vm.events[i].status;
              }
          }
      }

      return '';
  };


}
})();