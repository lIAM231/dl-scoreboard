PlayersList = {}

Citizen.CreateThread(function()
    while true do
        for Index, Player in ipairs(PlayersList) do
            PlayersList[Index] = nil
        end
        for _, PlayerId in ipairs(GetPlayers()) do
            Retval = false
            table.insert(PlayersList, {PlayerId, GetPlayerName(PlayerId), GetPlayerPing(PlayerId)})
            Retval = true
            while not Retval do Citizen.Wait(150) end
        end
		Citizen.Wait(5000)
	end
end)

RegisterServerEvent("dl-scoreboard:server:requestPlayersList", function()
    TriggerClientEvent("dl-scoreboard:client:requestPlayersList", -1, PlayersList)
end)