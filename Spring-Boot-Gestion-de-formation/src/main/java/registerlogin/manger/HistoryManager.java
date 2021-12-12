package registerlogin.manger;

import registerlogin.dto.HistoryDto;
import registerlogin.model.History;

import java.util.List;

public interface HistoryManager {
    HistoryDto addHistory(HistoryDto historyDto);

    List<HistoryDto> getHistories();

    HistoryDto findHistoryBySore(int score);

    HistoryDto findHistoryByUsername(String username);

    HistoryDto editHistory(HistoryDto historyDto, String username);
}
