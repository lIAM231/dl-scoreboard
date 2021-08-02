const mainPanel = document.getElementById("mainPanel");
const mainList = document.getElementById("mainList");
const mainListTable = document.getElementById("mainListTable");
const mainCount = document.getElementById("mainCount"), mainBar = document.getElementById("mainBar");

window.addEventListener("message", (event) => {
    if (event.data.playersList != undefined) {
        const playersList = event.data.playersList;
        let playersListHtml = "<tr id='mainListTitle'><th>ID</th><th>STEAM</th><th>PING</th></tr>", currentPlayer;
        for (let playerIndex = 0; playerIndex < playersList.length; playerIndex++) {
            if (playersList[playerIndex]) {
                currentPlayer = playersList[playerIndex];
                playersListHtml += "<tr><th>" + currentPlayer[0] + "</th><th>" + currentPlayer[1] + "</th><th class='pingClass'>" + currentPlayer[2] + "ms</th></tr>"
            }
        }

        mainCount.innerHTML = playersList.length + "/64";
        mainBar.style.width = (playersList.length / 64) * 100 + "%"
        mainListTable.innerHTML = playersListHtml;
    }

    if (event.data.enableScoreboard != undefined) {
        if (event.data.enableScoreboard) {
            SlideOpen();
        } else {
            SlideClose();
        }
    }
})

const SlideOpen = () => {
    mainPanel.style.transform = "translateY(0vh)";
    mainList.scrollTo(0, 0);
}

const SlideClose = () => {
    mainPanel.style.transform = "translateY(-100vh)";
}