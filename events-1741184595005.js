jQuery("#simulation")
  .on("click", ".m-d28c0213-f654-4c28-95f4-7c5407ad2684 .click,.m-d28c0213-f654-4c28-95f4-7c5407ad2684.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/67fb9edc-b68a-4216-8ec0-7c6061de50ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_5 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_17 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_1 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_7 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_12 svg" ],
                    "attributes": {
                      "path-background-color": "#818181",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_18 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_20 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_19 span" ],
                    "attributes": {
                      "color": "#818181"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_18 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_1 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_5 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_7 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_12 svg" ],
                    "attributes": {
                      "path-background-color": "#818181",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_20 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_19 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_17 span" ],
                    "attributes": {
                      "color": "#818181"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/67fb9edc-b68a-4216-8ec0-7c6061de50ef"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_7 svg" ],
                    "attributes": {
                      "path-background-color": "#000000",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_19 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_5 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_1 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_12 svg" ],
                    "attributes": {
                      "path-background-color": "#818181",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_18 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_20 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_17 span" ],
                    "attributes": {
                      "color": "#818181"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/a32d58a5-2737-4445-942a-0497e1f1a758"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_12 svg" ],
                    "attributes": {
                      "path-background-color": "#818181",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_20 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_5 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_1 svg",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Path_7 svg" ],
                    "attributes": {
                      "path-background-color": "#818181",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_18 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_19 span",
                  "#m-d28c0213-f654-4c28-95f4-7c5407ad2684 #Text_17 span" ],
                    "attributes": {
                      "color": "#818181"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e185c6fb-6901-4379-b53e-b6edd8a1892c"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });