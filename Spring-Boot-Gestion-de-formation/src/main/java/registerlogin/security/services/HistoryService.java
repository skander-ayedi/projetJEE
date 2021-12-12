package registerlogin.security.services;

import registerlogin.model.History;

public interface HistoryService {
    History addHistory(History history);

    History editHistory(History history, History history1);
}
