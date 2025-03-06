(function(window, undefined) {
  var dictionary = {
    "0f78bc71-2bfc-481e-9578-ee7aa3f36447": "Calendar",
    "b0fe9222-02e8-4974-ba09-53b01909fc52": "Question 7 of 7",
    "64879c37-f636-4316-ace2-1a60663bb2ca": "Community Yoga GC",
    "46a2c621-e441-48c6-a6d5-a0dc8b5c078f": "Groups & Social",
    "bcc9a535-148d-46d4-b22b-0bbdf890b0d0": "Question 1 of 7",
    "ec7dcb9c-717f-40d0-89ec-a99f182232c6": "DIY Candle-Making Kit GC",
    "b190d91d-ef70-45e2-8f63-740994ae4330": "Individual photo",
    "32b7ef4d-b8d2-43e1-84ad-68cba7a317b6": "Photos",
    "9b0a3fc9-9f88-4d87-b77f-5556f17a3993": "Rewards & Progress",
    "de31785b-6845-468b-9df7-e2456685dbe5": "Question 3 of 7",
    "50d0c552-6210-4025-8cbb-a24f118d9047": "Settings",
    "67fb9edc-b68a-4216-8ec0-7c6061de50ef": "Collage",
    "4e8b9272-69fd-410d-a5be-c7316a0e9f91": "Question 5 of 7",
    "e185c6fb-6901-4379-b53e-b6edd8a1892c": "Search",
    "bd7ac72f-efc8-4a0e-abb3-8197f7dced4d": "Historical Site GC",
    "28bdf231-755b-47f1-bd98-25abe0cbccf8": "Quick Start Guide",
    "e4af9f6c-e800-4888-a33f-e5697f488682": "Startup Screen",
    "a32d58a5-2737-4445-942a-0497e1f1a758": "Library",
    "8b777bf4-20c8-4e23-962d-ee4911ac64fe": "Nature Trail GC",
    "9298c373-985c-47a0-acb5-c18b96baae18": "Welcome page",
    "ccd3d64f-d48f-4f12-898a-f47379be023a": "New album",
    "07050a4b-3842-42b9-925a-faac9847949f": "Question 6 of 7",
    "9e683bde-bf55-4990-8f73-56f46c84e1df": "DIY Candle-Making",
    "afb7c22f-ba71-4f25-be5f-3d2ea4db256e": "Rewards & Progress 2",
    "312d748b-ee78-495a-9d70-b1ea8f84c712": "Question 2 of 7",
    "d4ca541a-68b7-4aac-adf4-f3c3090e2fcc": "Where are you about?",
    "44b20fba-30eb-48ec-b36e-6705c7ac04b4": "Yoga Class",
    "8fca36e6-b865-45fd-9a4f-1e1327228db5": "Nature Trail",
    "8158e32b-c400-46fc-96e9-f428e5579e3f": "Historical SIte & Museum",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Home",
    "b534ae41-91bb-4da2-a8a1-c737206102cc": "Question 4 of 7",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "d28c0213-f654-4c28-95f4-7c5407ad2684": "Bottom nav menu",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);