window.globalProvideData('slide', '{"title":"Drag the definitions on the right to the correct SpLD, then select Confirm.","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide10","width":1000,"height":562,"resume":true,"background":{"type":"fill","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xF2F2F2","alpha":100,"stop":0}]}},"id":"665AxRu84C1","actionGroups":{"ReviewInt_5y8ODkvyiQg":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6Fas8qX3wE0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5oVeTjWSMaD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.64KK0ZhAobt"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6L9kzQtpmnF"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5cut7kQwyU2"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6T5Afa9qHzu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5l3LtR1MLWW"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5uO6GxYYFp2"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5n5LrPpcCGq.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg_IncorrectReview"}}]}]},"ReviewIntCorrectIncorrect_5y8ODkvyiQg":{"kind":"actiongroup","actions":[{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.6Fas8qX3wE0"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.5oVeTjWSMaD"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.64KK0ZhAobt"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.6L9kzQtpmnF"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.5cut7kQwyU2"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.6T5Afa9qHzu"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.5l3LtR1MLWW"},"enabled":{"type":"boolean","value":true}},{"kind":"set_review","objRef":{"type":"string","value":"5y8ODkvyiQg.5uO6GxYYFp2"},"enabled":{"type":"boolean","value":true}}]},"AnsweredInt_5y8ODkvyiQg":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5y8ODkvyiQg"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5y8ODkvyiQg":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6Fas8qX3wE0"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5oVeTjWSMaD"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.64KK0ZhAobt"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6L9kzQtpmnF"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5cut7kQwyU2"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.6T5Afa9qHzu"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5l3LtR1MLWW"},"enabled":{"type":"boolean","value":false}},{"kind":"set_enabled","objRef":{"type":"string","value":"5y8ODkvyiQg.5uO6GxYYFp2"},"enabled":{"type":"boolean","value":false}}]},"5y8ODkvyiQg_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5nArZxrwavL","typeb":"string"},{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5n5LrPpcCGq.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.6SvpElguhj9.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5y8ODkvyiQg"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5n5LrPpcCGq.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5n5LrPpcCGq.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5y8ODkvyiQg"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_665AxRu84C1":{"kind":"actiongroup","actions":[{"kind":"playnextdrawslide"}]},"NavigationRestrictionPreviousSlide_665AxRu84C1":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbnsnfns00000000001"}]}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6lY8YrJ5s1H","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6lY8YrJ5s1H","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_parent.$Id","typea":"property","valueb":"5nArZxrwavL","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5nArZxrwavL","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5y8ODkvyiQg"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5nArZxrwavL","typea":"var","valueb":"6SvpElguhj9","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6SvpElguhj9.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5y8ODkvyiQg"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.6SvpElguhj9.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5y8ODkvyiQg"}]}]}],"elseActions":[{"kind":"exe_actiongroup","id":"5y8ODkvyiQg_CheckAnswered"}]}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5nArZxrwavL","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y8ODkvyiQg","typea":"var","valueb":"6SvpElguhj9","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6SvpElguhj9"},"completed_slide_ref":{"type":"string","value":"_player.5ro8bWA3MTs.60JqXmuTqjq"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5nArZxrwavL","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5y8ODkvyiQg","typea":"var","valueb":"6SvpElguhj9","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.6SvpElguhj9"},"completed_slide_ref":{"type":"string","value":"_player.5ro8bWA3MTs.60JqXmuTqjq"},"status_filter":""}],"elseActions":[{"kind":"playnextdrawslide"}]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_665AxRu84C1"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_665AxRu84C1"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":369,"id":"5uwZaXSyl2k"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":41483,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5xchLChGOxH"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.6Fas8qX3wE0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.5oVeTjWSMaD"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.64KK0ZhAobt"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.6L9kzQtpmnF"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.5cut7kQwyU2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.6T5Afa9qHzu"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.5l3LtR1MLWW"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg.5uO6GxYYFp2"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5y8ODkvyiQg"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"67ySZinLPVI"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6eLrssTIEps"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5kmpGVDtgZm"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"60sFc9eFKXY"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6TPRcBlPWOn"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6X28CkqSOJB"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"5uwZaXSyl2k"}},{"kind":"media_play","objRef":{"type":"string","value":"5uwZaXSyl2k"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"5uwZaXSyl2k"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":-25,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":523.5,"rotateYPos":284,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1049,"bottom":570,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1186}},"html5data":{"xPos":0,"yPos":0,"width":1048,"height":569,"strokewidth":1}},"width":1048,"height":569,"resume":true,"useHandCursor":true,"id":"5xchLChGOxH"},{"kind":"scrollarea","contentwidth":851,"contentheight":262,"objects":[{"kind":"droparea","style":"matching","reviewdata":4,"shapemaskId":"","xPos":16,"yPos":196,"tabIndex":13,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5uO6GxYYFp2_1642473982","type":"vectortext","altText":"ASD","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":54,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":1188}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"5uO6GxYYFp2"},{"kind":"shufflegroup","objects":[{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6Z9cJob4KF8","reviewdata":4,"shapemaskId":"","xPos":450,"yPos":196,"tabIndex":14,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFEB8E8","alpha":100,"stop":0},{"kind":"color","rgb":"0xEDA2D6","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5l3LtR1MLWW_73945553","type":"vectortext","altText":"affects the way a person communicates and relates to other people ","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":368,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":1189}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"5l3LtR1MLWW"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5ezOzqUKQoi","reviewdata":3,"shapemaskId":"","xPos":450,"yPos":132,"tabIndex":11,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFEB8E8","alpha":100,"stop":0},{"kind":"color","rgb":"0xEDA2D6","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5cut7kQwyU2_1395706349","type":"vectortext","altText":"affects an individual\'s attention, concentration, impulsivity, activity levels and memory","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":387,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":1190}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"5cut7kQwyU2"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_5jCMY9ESJMV","reviewdata":2,"shapemaskId":"","xPos":450,"yPos":68,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":4,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFEB8E8","alpha":100,"stop":0},{"kind":"color","rgb":"0xEDA2D6","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_64KK0ZhAobt_-1313761813","type":"vectortext","altText":"affects - fine motor skill, gross motor coordination and balance skills","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":392,"bottom":44,"pngfb":false,"pr":{"l":"Lib","i":1191}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"64KK0ZhAobt"},{"kind":"dragitem","style":"matching","connectdata":"choices.choice_6aOaQzHTblj","reviewdata":1,"shapemaskId":"","xPos":450,"yPos":4,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":5,"scrolling":true,"shuffleLock":false,"colors":[{"kind":"color","name":"hover","fill":{"type":"linear","rotation":90,"colors":[{"kind":"color","rgb":"0xFEB8E8","alpha":100,"stop":0},{"kind":"color","rgb":"0xEDA2D6","alpha":100,"stop":100}]}}],"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6Fas8qX3wE0_-2096551668","type":"vectortext","altText":"affects the skills involved in accurate and fluent word reading and spelling","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":395,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":1192}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"6Fas8qX3wE0"}],"shuffle":true,"depth":2,"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":-1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":0,"rotateYPos":0,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"scrolling":true,"shuffleLock":false,"width":0,"height":0,"resume":true,"useHandCursor":true,"id":""},{"kind":"droparea","style":"matching","reviewdata":3,"shapemaskId":"","xPos":16,"yPos":132,"tabIndex":10,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6T5Afa9qHzu_-1323703055","type":"vectortext","altText":"ADD/ADHD","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":133,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":1193}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"6T5Afa9qHzu"},{"kind":"droparea","style":"matching","reviewdata":2,"shapemaskId":"","xPos":16,"yPos":68,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_6L9kzQtpmnF_602306792","type":"vectortext","altText":"Dyspraxia","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":111,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":1194}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"6L9kzQtpmnF"},{"kind":"droparea","style":"matching","reviewdata":1,"shapemaskId":"","xPos":16,"yPos":4,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":209,"rotateYPos":25,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"txt_5oVeTjWSMaD_-1806099699","type":"vectortext","altText":"Dyslexia ","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":102,"bottom":38,"pngfb":false,"pr":{"l":"Lib","i":1195}}},"html5data":{"xPos":0,"yPos":0,"width":418,"height":50,"strokewidth":0}},"width":418,"height":50,"resume":true,"useHandCursor":true,"id":"5oVeTjWSMaD"}],"shapemaskId":"","xPos":50,"yPos":158,"tabIndex":2,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":450,"rotateYPos":182,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"html5data":{"url":"","xPos":50,"yPos":158,"width":899,"height":364,"strokewidth":0}},"width":899,"height":364,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":900,"bottom":365,"altText":"Matching Drag and Drop","pngfb":false,"pr":{"l":"Lib","i":1187}}},"id":"5y8ODkvyiQg"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"","shapemaskId":"","xPos":14,"yPos":457,"tabIndex":15,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":471.5,"rotateYPos":24.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":944,"bottom":51,"altText":"Rectangle 2","pngfb":false,"pr":{"l":"Lib","i":1087}},"html5data":{"xPos":0,"yPos":0,"width":943,"height":50,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":944,"bottom":51,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1087}},"html5data":{"xPos":-2,"yPos":-2,"width":946,"height":53,"strokewidth":1}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":944,"bottom":51,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1088}},"html5data":{"xPos":-2,"yPos":-2,"width":946,"height":53,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":944,"bottom":51,"altText":"Rectangle 1","pngfb":false,"pr":{"l":"Lib","i":1088}},"html5data":{"xPos":-2,"yPos":-2,"width":946,"height":53,"strokewidth":1}}}],"width":943,"height":49,"resume":true,"useHandCursor":true,"id":"67ySZinLPVI","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpSetVisitedState"},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6eLrssTIEps_1679121594","id":"01","linkId":"txt__default_6eLrssTIEps","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":717,"bottom":30,"pngfb":false,"pr":{"l":"Lib","i":1197}}}],"shapemaskId":"","xPos":31,"yPos":464,"tabIndex":17,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":368.5,"rotateYPos":17.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":737,"bottom":35,"altText":"Drag the definitions on the right to the correct SpLD, then select Confirm.","pngfb":false,"pr":{"l":"Lib","i":1196}},"html5data":{"xPos":0,"yPos":0,"width":737,"height":35,"strokewidth":0}},"width":737,"height":35,"resume":true,"useHandCursor":true,"id":"6eLrssTIEps"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","textLib":[{"kind":"textdata","uniqueId":"5dp4oCrUQPG_-1928237639","id":"01","linkId":"txt__default_5kmpGVDtgZm","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":122,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":1096}}}],"shapemaskId":"","xPos":778,"yPos":462,"tabIndex":16,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":75,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1091}},"html5data":{"xPos":0,"yPos":0,"width":150,"height":40,"strokewidth":1}},"states":[{"kind":"state","name":"_default_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1091}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1092}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1091}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1091}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1092}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1093}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1094}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1095}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited","data":{"hotlinkId":"","accState":0,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1093}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Visited_Disabled","data":{"hotlinkId":"","accState":1,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1093}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}},{"kind":"state","name":"_default_Hover_Down_Visited","data":{"hotlinkId":"","accState":8,"vectorData":{"left":-2,"top":-2,"right":151,"bottom":41,"altText":"Confirm","pngfb":false,"pr":{"l":"Lib","i":1095}},"html5data":{"xPos":-2,"yPos":-2,"width":153,"height":43,"strokewidth":1}}}],"width":150,"height":40,"resume":true,"useHandCursor":true,"id":"5kmpGVDtgZm","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_down","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_visited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_savevisited","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetVisitedState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"var","value":"#_visited"}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDisabledState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpSetDownState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_visited","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_disabled","operator":"set","value":{"type":"boolean","value":false}},{"kind":"adjustvar","variable":"_savevisited","operator":"set","value":{"type":"boolean","value":false}}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetVisitedState","scopeRef":{"type":"string","value":"_this"}},{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"noteq","valuea":"_parent.5y8ODkvyiQg.5oVeTjWSMaD.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.5y8ODkvyiQg.6L9kzQtpmnF.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.5y8ODkvyiQg.6T5Afa9qHzu.$DragConnectData","typea":"property","valueb":"","typeb":"string"},{"kind":"compare","operator":"noteq","valuea":"_parent.5y8ODkvyiQg.5uO6GxYYFp2.$DragConnectData","typea":"property","valueb":"","typeb":"string"}]}},"thenActions":[{"kind":"eval_interaction","id":"_parent.5n5LrPpcCGq"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6lY8YrJ5s1H.InvalidPromptSlide"}}]},{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5uwZaXSyl2k"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5uwZaXSyl2k"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onpress","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetDownState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onreleaseoutside","actions":[{"kind":"adjustvar","variable":"_down","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"60sFc9eFKXY_-1758573823","id":"01","linkId":"txt__default_60sFc9eFKXY","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":518,"bottom":45,"pngfb":false,"pr":{"l":"Lib","i":1198}}}],"shapemaskId":"","xPos":46,"yPos":55,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":451,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":902,"bottom":60,"altText":"Match the learning difficulty to it’s definition","pngfb":false,"pr":{"l":"Lib","i":1130}},"html5data":{"xPos":0,"yPos":0,"width":902,"height":60,"strokewidth":0}},"width":902,"height":60,"resume":true,"useHandCursor":true,"id":"60sFc9eFKXY"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6TPRcBlPWOn_982838923","id":"01","linkId":"txt__default_6TPRcBlPWOn","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":67,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":1097}}}],"shapemaskId":"","xPos":12,"yPos":522,"tabIndex":18,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":53,"rotateYPos":11,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":106,"bottom":22,"altText":"Question","pngfb":false,"pr":{"l":"Lib","i":166}},"html5data":{"xPos":0,"yPos":0,"width":106,"height":22,"strokewidth":0}},"width":106,"height":22,"resume":true,"useHandCursor":true,"id":"6TPRcBlPWOn"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6X28CkqSOJB_-826174998","id":"01","linkId":"txt__default_6X28CkqSOJB","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":78,"bottom":20,"pngfb":false,"pr":{"l":"Lib","i":1199}}}],"shapemaskId":"","xPos":50,"yPos":522,"tabIndex":19,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":44,"rotateYPos":11,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":88,"bottom":22,"altText":"10 /10","pngfb":false,"pr":{"l":"Lib","i":168}},"html5data":{"xPos":0,"yPos":0,"width":88,"height":22,"strokewidth":0}},"width":88,"height":22,"resume":true,"useHandCursor":true,"id":"6X28CkqSOJB"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5y8ODkvyiQg_CorrectReview","id":"01","linkId":"5y8ODkvyiQg_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":540,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":1100}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":20,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Correct","pngfb":false,"pr":{"l":"Lib","i":1099}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"5y8ODkvyiQg_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5y8ODkvyiQg_IncorrectReview","id":"01","linkId":"5y8ODkvyiQg_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"width":0,"height":0,"shadowIndex":-1,"vectortext":{"left":0,"top":0,"right":548,"bottom":35,"pngfb":false,"pr":{"l":"Lib","i":1102}}}],"shapemaskId":"","xPos":0,"yPos":522,"tabIndex":21,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":500,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":10,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":1000,"bottom":40,"altText":"Incorrect","pngfb":false,"pr":{"l":"Lib","i":1101}},"html5data":{"xPos":1,"yPos":1,"width":997,"height":37,"strokewidth":2}},"width":1000,"height":40,"resume":false,"useHandCursor":true,"id":"5y8ODkvyiQg_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');