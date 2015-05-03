
'use strict';

define(['angular',
    'controllers-module',

], function(angular, controllers) {

    // Controller definition
    controllers.controller("indexCtrl", ["$scope", "$rootScope", function($scope, $rootScope) {
        $scope.user = {
            first_name : "Fabio",
            last_name : "Almeida",
            skillSet : [
                {title:'Full Stack WebApp Development',description:"As a full-stack web developer I am someone who has honed skills in both front-end web design/development and back-end/server coding. You can count on me to design, code, implement and maintain a fully functional modern interactive website on my own (not just a static website with a few pages)."},
                {title:'Project Management',description:""},
                {title:'Agile Development',description:""},
                {title:'Prototyping',description:""},
                {title:'Software Development',description:""}
            ],
            experience : [
                {company:'GE - Global Services',job:'Senior Software Developer',start:'Jan/2015', end:'Current',description:" Full Stack Development of Global solutions for Health Care Field Services  Oversee all technical aspects of application development  Migrate current platforms to Predix 2.0 and Cloud Foundry Technologies"},
                {company:'GE - Diagnostics Imaging',job:'Web and Application Developer',start:'Jul 13', end:'Dec 14',description:"Migrated old technologies to GE Predix Platform Developed applications to automate and streamline the field service  Integrated different technologies into a bundled application to reduce over the phone response time for Remote Technical Engineers."},
                {company:'GE - Diagnostics Systems',job:'Biomedical Engineering',start:'Feb 12', end:'Jul 13',description:" Assisted customers on issues involving equipment malfunction and user interface.  Performed hands on knowledge transfer with customers on medical systems.  Monitored and repaired medical devices and their connecting networks.  Responded to Operating Room calls for urgent repairs  Oversaw equipment installation, network set up and hands on training for patient monitoring systems."},
                {company:'GE - Diagnostics Systems',job:'BMET Intern',start:'Nov 11', end:'Feb 12',description:" Shadowed for 3 months Biomedical Engineers during repairs and preventive maintenance  Assisted with customer calls and troubleshooting brainstorming"},
                {company:'TAM - Brazilian Airlines',job:'Flight Dispatcher',start:'Jul 10', end:'Nov 11',description:" Prepared and delivered flight plan documentation  Briefed technical crew on their route and upcoming flight details  Oversaw all handling companies activities, aircraft maintenance, and cargo loading and offloading process  Ensured the aircraft’s ground safety and oversaw cargo loading and cargo weight distribution"}
            ]
        }

        $scope.$on('bindModal', function(ngRepeatFinishedEvent) {
            $(".mobileModal").each(function(){
                var trigger = $(this).attr("triggered-by");
                var that = this;
                $(that).find(".closeMobileModal").click(function(){
                    $(that).removeClass("show");
                });
                $('#'+trigger).click(function(event){
                    $(that).addClass("show");
                });
            })
            });

        //roleList1 to treeview
        $scope.roleList = $scope.roleList1;

    }]);
});