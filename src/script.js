'use strict' 

chrome.commands.onCommand.addListener(command => {
     if (command === 'mute_selected_tab'){
          chrome.tabs.getSelected(null , tab => {
               chrome.tabs.update(tab.id , {muted : !tab.mutedInfo.muted})
          })
     }

}) 



