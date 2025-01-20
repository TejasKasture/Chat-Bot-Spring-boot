package com.ai.gemini_ai;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@AllArgsConstructor
@RestController
@RequestMapping("/api/qna")
public class AIController
{
    public AIController(QnAService qnAService) {
        this.qnAService = qnAService;
    }

    private final QnAService qnAService;

    @PostMapping("/ask")
    public ResponseEntity<String> askQuestions(@RequestBody Map<String,String> payload)
    {
        String question=payload.get("question");
        String answer=qnAService.getAnswer(question);
        return ResponseEntity.ok(answer);
    }



}
