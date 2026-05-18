import type { Question } from "@/types";

// Topic E1 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "E1-gen01",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-pronouns",
      "prepositions"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu sau:",
    "sentence": "Mr. Henderson, to ___ I spoke earlier today, will attend the merger meeting.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ (to) chỉ người, ta bắt buộc dùng 'whom' làm tân ngữ, không dùng 'who'.",
    "sentenceVi": "Ông Henderson, người mà tôi đã nói chuyện trước đó hôm nay, sẽ tham dự cuộc họp sáp nhập.",
    "vocabNotes": [
      {
        "word": "Henderson",
        "pos": "danh từ",
        "vi": "tên riêng"
      },
      {
        "word": "spoke",
        "pos": "động từ",
        "vi": "đã nói chuyện"
      },
      {
        "word": "earlier",
        "pos": "trạng từ",
        "vi": "trước đó"
      },
      {
        "word": "attend",
        "pos": "động từ",
        "vi": "tham dự"
      },
      {
        "word": "merger",
        "pos": "danh từ",
        "vi": "sáp nhập"
      },
      {
        "word": "meeting",
        "pos": "danh từ",
        "vi": "cuộc họp"
      }
    ]
  },
  {
    "id": "E1-gen02",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-pronouns",
      "possession"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "The artist ___ paintings are on display in the lobby is very talented.",
    "options": [
      "who",
      "whom",
      "whose",
      "which"
    ],
    "answerIndex": 2,
    "explanationVi": "'Whose' được dùng để chỉ sở hữu, thay thế cho tính từ sở hữu của danh từ 'artist' (những bức tranh CỦA họa sĩ).",
    "sentenceVi": "Nghệ sĩ có những bức tranh đang được trưng bày ở sảnh rất tài năng.",
    "vocabNotes": [
      {
        "word": "artist",
        "pos": "danh từ",
        "vi": "nghệ sĩ"
      },
      {
        "word": "paintings",
        "pos": "danh từ",
        "vi": "tranh vẽ"
      },
      {
        "word": "on display",
        "pos": "cụm từ",
        "vi": "đang trưng bày"
      },
      {
        "word": "lobby",
        "pos": "danh từ",
        "vi": "sảnh"
      },
      {
        "word": "talented",
        "pos": "tính từ",
        "vi": "tài năng"
      }
    ]
  },
  {
    "id": "E1-gen03",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-pronouns",
      "defining-clause"
    ],
    "prompt": "Điền một đại từ quan hệ phù hợp (có thể điền 'that' hoặc 'which'):",
    "sentence": "The report ___ you submitted yesterday has been reviewed by the manager.",
    "explanationVi": "'Which' hoặc 'that' dùng để thay thế cho danh từ chỉ vật (the report) đóng vai trò tân ngữ trong mệnh đề xác định.",
    "sentenceVi": "Báo cáo mà bạn đã nộp hôm qua đã được quản lý xem xét.",
    "vocabNotes": [
      {
        "word": "report",
        "pos": "danh từ",
        "vi": "báo cáo"
      },
      {
        "word": "submitted",
        "pos": "động từ",
        "vi": "đã nộp"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      },
      {
        "word": "reviewed",
        "pos": "động từ",
        "vi": "xem xét"
      },
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "quản lý"
      }
    ],
    "options": [
      "where",
      "that",
      "which",
      "what"
    ],
    "answerIndex": 2
  },
  {
    "id": "E1-gen04",
    "topicId": "E1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "reduced-relative-clause",
      "passive-voice"
    ],
    "prompt": "Sắp xếp các từ để tạo thành câu hoàn chỉnh (sử dụng mệnh đề rút gọn):",
    "tiles": [
      "Goods",
      "made",
      "in",
      "this",
      "factory",
      "are",
      "exported"
    ],
    "answer": "Goods made in this factory are exported",
    "explanationVi": "Đây là dạng rút gọn mệnh đề quan hệ bị động (which are made -> made) để bổ nghĩa cho danh từ 'Goods'.",
    "sentenceVi": "Hàng hóa sản xuất tại nhà máy này được xuất khẩu.",
    "vocabNotes": [
      {
        "word": "Goods",
        "pos": "danh từ",
        "vi": "hàng hóa"
      },
      {
        "word": "made",
        "pos": "động từ",
        "vi": "sản xuất"
      },
      {
        "word": "factory",
        "pos": "danh từ",
        "vi": "nhà máy"
      },
      {
        "word": "exported",
        "pos": "động từ",
        "vi": "xuất khẩu"
      }
    ]
  },
  {
    "id": "E1-gen05",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-adverbs",
      "place"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The conference hall ___ the seminar will be held is located downtown.",
    "options": [
      "where",
      "when",
      "why",
      "who"
    ],
    "answerIndex": 0,
    "explanationVi": "'Where' là đại từ quan hệ chỉ nơi chốn, thay thế cho 'the conference hall'.",
    "sentenceVi": "Hội trường nơi hội thảo sẽ được tổ chức nằm ở trung tâm thành phố.",
    "vocabNotes": [
      {
        "word": "conference hall",
        "pos": "cụm từ",
        "vi": "hội trường"
      },
      {
        "word": "seminar",
        "pos": "danh từ",
        "vi": "hội thảo"
      },
      {
        "word": "held",
        "pos": "động từ",
        "vi": "tổ chức"
      },
      {
        "word": "located",
        "pos": "tính từ",
        "vi": "nằm"
      },
      {
        "word": "downtown",
        "pos": "trạng từ",
        "vi": "trung tâm thành phố"
      }
    ]
  },
  {
    "id": "E1-gen06",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "non-defining-clause",
      "sentence-modifier"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Ms. Tanaka received a promotion, ___ surprised many of her colleagues.",
    "options": [
      "that",
      "which",
      "who",
      "whom"
    ],
    "answerIndex": 1,
    "explanationVi": "'Which' có thể dùng để thay thế cho cả một mệnh đề phía trước. Lưu ý không dùng 'that' sau dấu phẩy.",
    "sentenceVi": "Cô Tanaka đã nhận được một sự thăng chức, điều này làm nhiều đồng nghiệp của cô ngạc nhiên.",
    "vocabNotes": [
      {
        "word": "Tanaka",
        "pos": "danh từ",
        "vi": "tên riêng"
      },
      {
        "word": "received",
        "pos": "động từ",
        "vi": "đã nhận"
      },
      {
        "word": "promotion",
        "pos": "danh từ",
        "vi": "thăng chức"
      },
      {
        "word": "surprised",
        "pos": "động từ",
        "vi": "làm ngạc nhiên"
      },
      {
        "word": "colleagues",
        "pos": "danh từ",
        "vi": "đồng nghiệp"
      }
    ]
  },
  {
    "id": "E1-gen07",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-adverbs",
      "reason"
    ],
    "prompt": "Điền đại từ quan hệ chỉ lý do thích hợp:",
    "sentence": "The main reason ___ the project was delayed is the lack of funding.",
    "explanationVi": "'Why' được dùng sau danh từ 'reason' để chỉ nguyên nhân dẫn đến sự việc trong mệnh đề quan hệ.",
    "sentenceVi": "Lý do chính khiến dự án bị trì hoãn là thiếu kinh phí.",
    "vocabNotes": [
      {
        "word": "main",
        "pos": "tính từ",
        "vi": "chính"
      },
      {
        "word": "reason",
        "pos": "danh từ",
        "vi": "lý do"
      },
      {
        "word": "project",
        "pos": "danh từ",
        "vi": "dự án"
      },
      {
        "word": "delayed",
        "pos": "tính từ",
        "vi": "bị trì hoãn"
      },
      {
        "word": "lack of",
        "pos": "cụm từ",
        "vi": "thiếu"
      },
      {
        "word": "funding",
        "pos": "danh từ",
        "vi": "kinh phí"
      }
    ],
    "options": [
      "when",
      "that",
      "why",
      "how"
    ],
    "answerIndex": 2
  },
  {
    "id": "E1-gen08",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "reduced-relative-clause",
      "active-voice"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "People ___ in the designated smoking area are requested to dispose of waste properly.",
    "options": [
      "smoke",
      "smoked",
      "smoking",
      "are smoking"
    ],
    "answerIndex": 2,
    "explanationVi": "Dùng hiện tại phân từ (V-ing) để rút gọn mệnh đề quan hệ mang nghĩa chủ động (People who are smoking -> People smoking).",
    "sentenceVi": "Những người hút thuốc trong khu vực hút thuốc được chỉ định được yêu cầu vứt bỏ rác thải đúng cách.",
    "vocabNotes": [
      {
        "word": "smoking",
        "pos": "động từ",
        "vi": "hút thuốc"
      },
      {
        "word": "designated",
        "pos": "tính từ",
        "vi": "được chỉ định"
      },
      {
        "word": "area",
        "pos": "danh từ",
        "vi": "khu vực"
      },
      {
        "word": "requested",
        "pos": "động từ",
        "vi": "được yêu cầu"
      },
      {
        "word": "dispose of",
        "pos": "cụm từ",
        "vi": "vứt bỏ"
      },
      {
        "word": "waste",
        "pos": "danh từ",
        "vi": "rác thải"
      },
      {
        "word": "properly",
        "pos": "trạng từ",
        "vi": "đúng cách"
      }
    ]
  },
  {
    "id": "E1-gen09",
    "topicId": "E1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "relative-adverbs",
      "time"
    ],
    "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
    "tiles": [
      "Friday",
      "is",
      "the",
      "day",
      "when",
      "we",
      "meet"
    ],
    "answer": "Friday is the day when we meet",
    "explanationVi": "'When' được dùng làm đại từ quan hệ chỉ thời gian, bổ nghĩa cho danh từ 'the day'.",
    "sentenceVi": "Thứ Sáu là ngày chúng ta gặp mặt.",
    "vocabNotes": [
      {
        "word": "Friday",
        "pos": "danh từ",
        "vi": "thứ Sáu"
      },
      {
        "word": "day",
        "pos": "danh từ",
        "vi": "ngày"
      },
      {
        "word": "meet",
        "pos": "động từ",
        "vi": "gặp mặt"
      }
    ]
  },
  {
    "id": "E1-gen10",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-pronouns",
      "object"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The technical support team resolved the issue ___ we encountered this morning.",
    "options": [
      "whom",
      "whose",
      "that",
      "who"
    ],
    "answerIndex": 2,
    "explanationVi": "'That' thay thế cho danh từ chỉ vật 'the issue' làm tân ngữ trong mệnh đề quan hệ xác định.",
    "sentenceVi": "Đội hỗ trợ kỹ thuật đã giải quyết vấn đề mà chúng tôi gặp phải sáng nay.",
    "vocabNotes": [
      {
        "word": "technical support team",
        "pos": "cụm từ",
        "vi": "đội hỗ trợ kỹ thuật"
      },
      {
        "word": "resolved",
        "pos": "động từ",
        "vi": "đã giải quyết"
      },
      {
        "word": "issue",
        "pos": "danh từ",
        "vi": "vấn đề"
      },
      {
        "word": "encountered",
        "pos": "động từ",
        "vi": "gặp phải"
      },
      {
        "word": "morning",
        "pos": "danh từ",
        "vi": "buổi sáng"
      }
    ]
  },
  {
    "id": "E1-bulk-001",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-pronoun",
      "who"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The architect ___ designed this environmentally friendly building received a prestigious award.",
    "options": [
      "who",
      "whom",
      "which",
      "whose"
    ],
    "answerIndex": 0,
    "explanationVi": "Chủ ngữ của mệnh đề quan hệ là người (\"The architect\"), và đại từ quan hệ cần thay thế cho chủ ngữ đó, nên \"who\" là đáp án chính xác.",
    "sentenceVi": "Kiến trúc sư người đã thiết kế tòa nhà thân thiện với môi trường này đã nhận được một giải thưởng danh giá.",
    "vocabNotes": [
      {
        "word": "architect",
        "pos": "danh từ",
        "vi": "kiến trúc sư"
      },
      {
        "word": "environmentally friendly",
        "pos": "cụm từ",
        "vi": "thân thiện với môi trường"
      },
      {
        "word": "prestigious",
        "pos": "tính từ",
        "vi": "danh giá"
      },
      {
        "word": "award",
        "pos": "danh từ",
        "vi": "giải thưởng"
      }
    ]
  },
  {
    "id": "E1-bulk-002",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-pronoun",
      "whom",
      "preposition"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Sarah, with ___ I collaborated on the latest project, has been promoted to team lead.",
    "options": [
      "who",
      "whom",
      "which",
      "whose"
    ],
    "answerIndex": 1,
    "explanationVi": "Khi đại từ quan hệ đứng sau giới từ (\"with\"), ta phải sử dụng \"whom\" để chỉ người, không dùng \"who\".",
    "sentenceVi": "Sarah, người mà tôi đã cộng tác trong dự án gần đây, đã được thăng chức trưởng nhóm.",
    "vocabNotes": [
      {
        "word": "collaborated",
        "pos": "động từ",
        "vi": "cộng tác"
      },
      {
        "word": "latest",
        "pos": "tính từ",
        "vi": "gần đây nhất"
      },
      {
        "word": "promoted",
        "pos": "động từ",
        "vi": "thăng chức"
      },
      {
        "word": "team lead",
        "pos": "cụm từ",
        "vi": "trưởng nhóm"
      }
    ]
  },
  {
    "id": "E1-bulk-003",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-pronoun",
      "which",
      "object"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The documentary ___ we watched last night provided insightful information about climate change.",
    "options": [
      "which",
      "who",
      "where",
      "whose"
    ],
    "answerIndex": 0,
    "explanationVi": "Đại từ quan hệ cần bổ sung thông tin cho danh từ chỉ vật (\"The documentary\") và đóng vai trò tân ngữ trong mệnh đề quan hệ (\"we watched...\"), nên \"which\" là đáp án chính xác. (Trong trường hợp này, \"which\" cũng có thể được lược bỏ).",
    "sentenceVi": "Bộ phim tài liệu mà chúng tôi đã xem tối qua cung cấp thông tin sâu sắc về biến đổi khí hậu.",
    "vocabNotes": [
      {
        "word": "documentary",
        "pos": "danh từ",
        "vi": "phim tài liệu"
      },
      {
        "word": "insightful",
        "pos": "tính từ",
        "vi": "sâu sắc"
      },
      {
        "word": "climate change",
        "pos": "cụm từ",
        "vi": "biến đổi khí hậu"
      }
    ]
  },
  {
    "id": "E1-bulk-004",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-pronoun",
      "whose",
      "possession"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Tech Solutions Inc., ___ shares recently plummeted, announced a major restructuring plan.",
    "options": [
      "which",
      "that",
      "whose",
      "whom"
    ],
    "answerIndex": 2,
    "explanationVi": "Đại từ quan hệ cần chỉ sự sở hữu (\"shares\" của \"Tech Solutions Inc.\"), nên \"whose\" là lựa chọn đúng.",
    "sentenceVi": "Tech Solutions Inc., công ty có cổ phiếu gần đây giảm mạnh, đã công bố một kế hoạch tái cơ cấu lớn.",
    "vocabNotes": [
      {
        "word": "shares",
        "pos": "danh từ",
        "vi": "cổ phiếu"
      },
      {
        "word": "plummeted",
        "pos": "động từ",
        "vi": "giảm mạnh, sụt giảm"
      },
      {
        "word": "restructuring plan",
        "pos": "cụm từ",
        "vi": "kế hoạch tái cơ cấu"
      }
    ]
  },
  {
    "id": "E1-bulk-005",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-pronoun",
      "which-whole-clause",
      "non-defining"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The management decided to implement a new policy without consulting the staff, ___ caused considerable unrest among employees.",
    "options": [
      "that",
      "what",
      "which",
      "where"
    ],
    "answerIndex": 2,
    "explanationVi": "Trong mệnh đề quan hệ không xác định (có dấu phẩy), \"which\" được dùng để thay thế cho cả mệnh đề phía trước, chỉ toàn bộ sự việc đã xảy ra, gây ra kết quả tiếp theo.",
    "sentenceVi": "Ban quản lý đã quyết định thực hiện một chính sách mới mà không tham khảo ý kiến nhân viên, điều này đã gây ra sự bất ổn đáng kể trong số các nhân viên.",
    "vocabNotes": [
      {
        "word": "implement",
        "pos": "động từ",
        "vi": "thực hiện"
      },
      {
        "word": "consulting",
        "pos": "động từ",
        "vi": "tham khảo ý kiến"
      },
      {
        "word": "considerable",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "unrest",
        "pos": "danh từ",
        "vi": "bất ổn"
      }
    ]
  },
  {
    "id": "E1-bulk-006",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-adverb",
      "where",
      "place"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The charming cafe ___ we had brunch yesterday serves excellent coffee and pastries.",
    "options": [
      "where",
      "which",
      "when",
      "what"
    ],
    "answerIndex": 0,
    "explanationVi": "Mệnh đề quan hệ cần bổ sung thông tin về địa điểm (\"The charming cafe\"), nên \"where\" là đại từ quan hệ phù hợp nhất.",
    "sentenceVi": "Quán cà phê quyến rũ nơi chúng tôi ăn bữa sáng muộn hôm qua phục vụ cà phê và bánh ngọt tuyệt vời.",
    "vocabNotes": [
      {
        "word": "charming",
        "pos": "tính từ",
        "vi": "quyến rũ, đáng yêu"
      },
      {
        "word": "brunch",
        "pos": "danh từ",
        "vi": "bữa sáng muộn (gộp bữa sáng và trưa)"
      },
      {
        "word": "pastries",
        "pos": "danh từ",
        "vi": "bánh ngọt"
      }
    ]
  },
  {
    "id": "E1-bulk-007",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "reduced-relative-clause",
      "present-participle"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The students ___ diligently for their final exams often gather in the library until late.",
    "options": [
      "preparing",
      "who prepared",
      "prepare",
      "to prepare"
    ],
    "answerIndex": 0,
    "explanationVi": "Đây là dạng rút gọn của mệnh đề quan hệ chủ động (\"who are preparing\"). Sử dụng hiện tại phân từ (-ing clauses) để chỉ hành động đang diễn ra hoặc hành động chủ động mà danh từ thực hiện.",
    "sentenceVi": "Những sinh viên đang chuẩn bị chăm chỉ cho kỳ thi cuối kỳ của họ thường tụ tập trong thư viện cho đến khuya.",
    "vocabNotes": [
      {
        "word": "diligently",
        "pos": "trạng từ",
        "vi": "chăm chỉ"
      },
      {
        "word": "final exams",
        "pos": "cụm từ",
        "vi": "kỳ thi cuối kỳ"
      },
      {
        "word": "gather",
        "pos": "động từ",
        "vi": "tụ tập"
      }
    ]
  },
  {
    "id": "E1-bulk-008",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "reduced-relative-clause",
      "past-participle"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All documents ___ in the archive must be retrieved with proper authorization.",
    "options": [
      "stored",
      "storing",
      "which stores",
      "to store"
    ],
    "answerIndex": 0,
    "explanationVi": "Đây là dạng rút gọn của mệnh đề quan hệ bị động (\"which are stored\"). Sử dụng quá khứ phân từ (-ed clauses) để chỉ hành động tác động lên danh từ đứng trước nó.",
    "sentenceVi": "Tất cả các tài liệu được lưu trữ trong kho lưu trữ phải được truy xuất với sự cho phép phù hợp.",
    "vocabNotes": [
      {
        "word": "archive",
        "pos": "danh từ",
        "vi": "kho lưu trữ, văn khố"
      },
      {
        "word": "retrieved",
        "pos": "động từ",
        "vi": "truy xuất, lấy lại"
      },
      {
        "word": "authorization",
        "pos": "danh từ",
        "vi": "sự cho phép, ủy quyền"
      }
    ]
  },
  {
    "id": "E1-bulk-009",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-pronoun",
      "what-vs-that"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I couldn't believe ___ she told me about the sudden resignation of the CEO.",
    "options": [
      "what",
      "that",
      "which",
      "whom"
    ],
    "answerIndex": 0,
    "explanationVi": "Trong câu này, \"what\" mang nghĩa là \"the thing(s) that\" (những điều mà), dùng để chỉ thông tin không xác định trước. \"That\" sẽ cần một danh từ đi trước nó.",
    "sentenceVi": "Tôi không thể tin được những gì cô ấy kể cho tôi về việc CEO đột ngột từ chức.",
    "vocabNotes": [
      {
        "word": "believe",
        "pos": "động từ",
        "vi": "tin"
      },
      {
        "word": "sudden",
        "pos": "tính từ",
        "vi": "đột ngột"
      },
      {
        "word": "resignation",
        "pos": "danh từ",
        "vi": "sự từ chức"
      },
      {
        "word": "CEO",
        "pos": "danh từ",
        "vi": "Tổng giám đốc điều hành"
      }
    ]
  },
  {
    "id": "E1-bulk-010",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-adverb",
      "when",
      "time"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "1999 was the year ___ my family first moved to this city.",
    "options": [
      "when",
      "where",
      "which",
      "why"
    ],
    "answerIndex": 0,
    "explanationVi": "Mệnh đề quan hệ cần bổ sung thông tin về thời gian (\"the year\"), nên \"when\" là đại từ quan hệ phù hợp nhất.",
    "sentenceVi": "Năm 1999 là năm gia đình tôi lần đầu tiên chuyển đến thành phố này.",
    "vocabNotes": [
      {
        "word": "moved",
        "pos": "động từ",
        "vi": "chuyển đến"
      },
      {
        "word": "city",
        "pos": "danh từ",
        "vi": "thành phố"
      }
    ]
  },
  {
    "id": "E1-bulk-011",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "who-vs-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The engineer ___ designed the new bridge will give a talk next week.",
    "options": [
      "who",
      "which",
      "whom",
      "whose"
    ],
    "answerIndex": 0,
    "explanationVi": "Đại từ quan hệ \"who\" thay cho người (the engineer) làm chủ ngữ trong mệnh đề quan hệ.",
    "sentenceVi": "Kỹ sư đã thiết kế cây cầu mới sẽ thuyết trình vào tuần sau.",
    "vocabNotes": [
      {
        "word": "engineer",
        "pos": "danh từ",
        "vi": "kỹ sư"
      },
      {
        "word": "talk",
        "pos": "danh từ",
        "vi": "bài thuyết trình"
      }
    ]
  },
  {
    "id": "E1-bulk-012",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "which-thing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The book ___ is on the table belongs to my brother.",
    "options": [
      "who",
      "which",
      "whose",
      "whom"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Which\" thay cho vật (the book) làm chủ ngữ trong mệnh đề quan hệ.",
    "sentenceVi": "Quyển sách ở trên bàn là của anh trai tôi.",
    "vocabNotes": [
      {
        "word": "belong to",
        "pos": "cụm từ",
        "vi": "thuộc về"
      }
    ]
  },
  {
    "id": "E1-bulk-013",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "that"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The package ___ arrived this morning needs to be signed for.",
    "options": [
      "who",
      "what",
      "that",
      "whose"
    ],
    "answerIndex": 2,
    "explanationVi": "\"That\" có thể thay cho cả người và vật trong mệnh đề quan hệ xác định. \"What\" không phải đại từ quan hệ.",
    "sentenceVi": "Bưu kiện đến sáng nay cần phải được ký nhận.",
    "vocabNotes": [
      {
        "word": "package",
        "pos": "danh từ",
        "vi": "bưu kiện"
      },
      {
        "word": "sign for",
        "pos": "cụm từ",
        "vi": "ký nhận"
      }
    ]
  },
  {
    "id": "E1-bulk-014",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "whose-possessive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I met a colleague ___ husband works for the same firm as my father.",
    "options": [
      "who",
      "which",
      "whose",
      "whom"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Whose\" chỉ sở hữu (chồng của đồng nghiệp). \"Who/whom\" làm chủ ngữ/tân ngữ, không sở hữu.",
    "sentenceVi": "Tôi đã gặp một đồng nghiệp có chồng làm cùng công ty với bố tôi.",
    "vocabNotes": [
      {
        "word": "colleague",
        "pos": "danh từ",
        "vi": "đồng nghiệp"
      },
      {
        "word": "firm",
        "pos": "danh từ",
        "vi": "công ty"
      }
    ]
  },
  {
    "id": "E1-bulk-015",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "where"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is the restaurant ___ we had our anniversary dinner last year.",
    "options": [
      "which",
      "where",
      "when",
      "what"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Where\" thay cho địa điểm (the restaurant). \"Which\" làm tân ngữ thì cần thêm giới từ \"at/in\".",
    "sentenceVi": "Đây là nhà hàng nơi chúng tôi đã ăn tối kỷ niệm năm ngoái.",
    "vocabNotes": [
      {
        "word": "anniversary",
        "pos": "danh từ",
        "vi": "kỷ niệm"
      }
    ]
  },
  {
    "id": "E1-bulk-016",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "when"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "January is the month ___ the company traditionally announces its annual bonuses.",
    "options": [
      "which",
      "where",
      "when",
      "whose"
    ],
    "answerIndex": 2,
    "explanationVi": "\"When\" thay cho thời gian (the month). Có thể thay bằng \"in which\".",
    "sentenceVi": "Tháng Một là tháng mà công ty thường công bố tiền thưởng hàng năm.",
    "vocabNotes": [
      {
        "word": "traditionally",
        "pos": "trạng từ",
        "vi": "theo truyền thống"
      },
      {
        "word": "annual bonus",
        "pos": "cụm từ",
        "vi": "tiền thưởng hàng năm"
      }
    ]
  },
  {
    "id": "E1-bulk-017",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "object-pronoun-omission"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The presentation ___ the marketing director gave was extremely informative.",
    "options": [
      "who",
      "which",
      "whose",
      "what"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Which\" (hoặc \"that\") thay cho vật (the presentation) làm tân ngữ. Trong văn nói có thể bỏ luôn đại từ này.",
    "sentenceVi": "Bài thuyết trình mà giám đốc marketing trình bày cực kỳ hữu ích.",
    "vocabNotes": [
      {
        "word": "marketing director",
        "pos": "cụm từ",
        "vi": "giám đốc marketing"
      },
      {
        "word": "informative",
        "pos": "tính từ",
        "vi": "có nhiều thông tin / hữu ích"
      }
    ]
  },
  {
    "id": "E1-bulk-018",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "non-defining"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My boss, ___ has worked here for 25 years, is retiring next month.",
    "options": [
      "who",
      "that",
      "whom",
      "what"
    ],
    "answerIndex": 0,
    "explanationVi": "Mệnh đề quan hệ không xác định (có dấu phẩy) không dùng \"that\". Cho người làm chủ ngữ → \"who\".",
    "sentenceVi": "Sếp tôi, người đã làm việc ở đây 25 năm, sẽ nghỉ hưu vào tháng tới.",
    "vocabNotes": [
      {
        "word": "boss",
        "pos": "danh từ",
        "vi": "sếp"
      },
      {
        "word": "retire",
        "pos": "động từ",
        "vi": "nghỉ hưu"
      }
    ]
  },
  {
    "id": "E1-bulk-019",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "preposition-fronting"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The candidate to ___ we offered the position has accepted.",
    "options": [
      "who",
      "whom",
      "which",
      "that"
    ],
    "answerIndex": 1,
    "explanationVi": "Khi giới từ đứng trước đại từ quan hệ, dùng \"whom\" cho người, \"which\" cho vật. \"To who/that\" không đúng chuẩn.",
    "sentenceVi": "Ứng viên mà chúng tôi đã đề nghị vị trí cho đã chấp nhận.",
    "vocabNotes": [
      {
        "word": "candidate",
        "pos": "danh từ",
        "vi": "ứng viên"
      },
      {
        "word": "position",
        "pos": "danh từ",
        "vi": "vị trí"
      }
    ]
  },
  {
    "id": "E1-bulk-020",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "whose-thing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We're moving to a building ___ design includes solar panels and rainwater collection.",
    "options": [
      "which",
      "whose",
      "what",
      "where"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Whose\" có thể dùng cho cả người và vật để chỉ sở hữu. Ở đây \"whose design\" = \"thiết kế của toà nhà\".",
    "sentenceVi": "Chúng tôi đang chuyển đến một toà nhà có thiết kế gồm tấm pin mặt trời và thu nước mưa.",
    "vocabNotes": [
      {
        "word": "solar panel",
        "pos": "cụm từ",
        "vi": "tấm pin mặt trời"
      },
      {
        "word": "rainwater collection",
        "pos": "cụm từ",
        "vi": "thu nước mưa"
      }
    ]
  },
  {
    "id": "E1-bulk-021",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "quantifier-of-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There were over 50 applicants, most of ___ had impressive resumes.",
    "options": [
      "whom",
      "which",
      "who",
      "that"
    ],
    "answerIndex": 0,
    "explanationVi": "Cấu trúc \"quantifier + of + whom/which\" trong mệnh đề quan hệ không xác định. \"Whom\" cho người (applicants).",
    "sentenceVi": "Có hơn 50 ứng viên, hầu hết đều có hồ sơ ấn tượng.",
    "vocabNotes": [
      {
        "word": "applicant",
        "pos": "danh từ",
        "vi": "người nộp đơn"
      },
      {
        "word": "resume",
        "pos": "danh từ",
        "vi": "hồ sơ xin việc"
      }
    ]
  },
  {
    "id": "E1-bulk-022",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "which-whole-clause"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The CEO announced layoffs at the meeting, ___ shocked everyone in the company.",
    "options": [
      "that",
      "what",
      "which",
      "who"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Which\" có thể chỉ cả mệnh đề phía trước (việc thông báo sa thải) trong mệnh đề quan hệ không xác định. \"That\" không dùng cho trường hợp này.",
    "sentenceVi": "CEO thông báo cắt giảm nhân sự tại cuộc họp, điều này gây sốc cho mọi người trong công ty.",
    "vocabNotes": [
      {
        "word": "layoff",
        "pos": "danh từ",
        "vi": "việc sa thải"
      },
      {
        "word": "shock",
        "pos": "động từ",
        "vi": "gây sốc"
      }
    ]
  },
  {
    "id": "E1-bulk-023",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "reduced-active"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The team ___ on the new product launch worked overtime for weeks.",
    "options": [
      "working",
      "worked",
      "to work",
      "works"
    ],
    "answerIndex": 0,
    "explanationVi": "Mệnh đề quan hệ rút gọn ở dạng chủ động: \"who worked\" → \"working\" (V-ing).",
    "sentenceVi": "Đội làm việc cho đợt ra mắt sản phẩm mới đã làm thêm giờ suốt nhiều tuần.",
    "vocabNotes": [
      {
        "word": "product launch",
        "pos": "cụm từ",
        "vi": "đợt ra mắt sản phẩm"
      },
      {
        "word": "overtime",
        "pos": "trạng từ",
        "vi": "ngoài giờ"
      }
    ]
  },
  {
    "id": "E1-bulk-024",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "reduced-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All software ___ on company computers must be approved by the IT department.",
    "options": [
      "installing",
      "installed",
      "to install",
      "installs"
    ],
    "answerIndex": 1,
    "explanationVi": "Mệnh đề quan hệ rút gọn dạng bị động: \"which is installed\" → \"installed\" (V3/Ved).",
    "sentenceVi": "Mọi phần mềm được cài đặt trên máy tính công ty đều phải được phòng IT phê duyệt.",
    "vocabNotes": [
      {
        "word": "install",
        "pos": "động từ",
        "vi": "cài đặt"
      },
      {
        "word": "approve",
        "pos": "động từ",
        "vi": "phê duyệt"
      }
    ]
  },
  {
    "id": "E1-bulk-025",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "subject-non-defining"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Hanoi, ___ is the capital of Vietnam, hosts several international conferences each year.",
    "options": [
      "that",
      "where",
      "which",
      "what"
    ],
    "answerIndex": 2,
    "explanationVi": "Mệnh đề quan hệ không xác định (có dấu phẩy) chỉ vật/nơi chốn dùng \"which\". \"That\" không dùng với mệnh đề không xác định.",
    "sentenceVi": "Hà Nội, vốn là thủ đô của Việt Nam, tổ chức nhiều hội nghị quốc tế mỗi năm.",
    "vocabNotes": [
      {
        "word": "capital",
        "pos": "danh từ",
        "vi": "thủ đô"
      },
      {
        "word": "host",
        "pos": "động từ",
        "vi": "tổ chức / đăng cai"
      }
    ]
  },
  {
    "id": "E1-bulk-026",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "in-which-vs-where"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The era ___ which they grew up shaped their values significantly.",
    "options": [
      "in",
      "on",
      "at",
      "to"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Grow up in (an era / a time)\". Khi dùng \"which\" thay vì \"when\", phải có giới từ \"in\" đứng trước.",
    "sentenceVi": "Thời đại mà họ lớn lên đã định hình giá trị của họ một cách đáng kể.",
    "vocabNotes": [
      {
        "word": "era",
        "pos": "danh từ",
        "vi": "thời đại"
      },
      {
        "word": "shape",
        "pos": "động từ",
        "vi": "định hình"
      }
    ]
  },
  {
    "id": "E1-bulk-027",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "what-clause"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ surprised the auditors most was the discrepancy in last quarter's report.",
    "options": [
      "That",
      "Which",
      "What",
      "Who"
    ],
    "answerIndex": 2,
    "explanationVi": "\"What\" = \"điều mà / thứ mà\", đứng đầu mệnh đề danh từ làm chủ ngữ. \"That/which/who\" không thể đứng đầu câu kiểu này.",
    "sentenceVi": "Điều khiến các kiểm toán viên ngạc nhiên nhất là sự chênh lệch trong báo cáo quý trước.",
    "vocabNotes": [
      {
        "word": "auditor",
        "pos": "danh từ",
        "vi": "kiểm toán viên"
      },
      {
        "word": "discrepancy",
        "pos": "danh từ",
        "vi": "sự chênh lệch"
      }
    ]
  },
  {
    "id": "E1-bulk-028",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "all-of-whom"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The board has 12 members, all of ___ approved the new strategic plan unanimously.",
    "options": [
      "who",
      "whom",
      "which",
      "them"
    ],
    "answerIndex": 1,
    "explanationVi": "Cấu trúc \"all/most/some of + whom\" cho người trong mệnh đề quan hệ. \"Of who\" sai. \"Of them\" cần dùng dấu chấm để thành câu mới.",
    "sentenceVi": "Hội đồng có 12 thành viên, tất cả đều nhất trí thông qua kế hoạch chiến lược mới.",
    "vocabNotes": [
      {
        "word": "board",
        "pos": "danh từ",
        "vi": "hội đồng"
      },
      {
        "word": "unanimously",
        "pos": "trạng từ",
        "vi": "nhất trí / đồng lòng"
      }
    ]
  },
  {
    "id": "E1-bulk-029",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "reason-why"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Nobody could explain the reason ___ the system crashed during peak hours.",
    "options": [
      "which",
      "why",
      "where",
      "what"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Why\" thay cho cụm chỉ lý do, đi sau \"reason\". Có thể thay bằng \"for which\".",
    "sentenceVi": "Không ai có thể giải thích lý do tại sao hệ thống bị sập trong giờ cao điểm.",
    "vocabNotes": [
      {
        "word": "crash",
        "pos": "động từ",
        "vi": "sập / hỏng"
      },
      {
        "word": "peak hours",
        "pos": "cụm từ",
        "vi": "giờ cao điểm"
      }
    ]
  },
  {
    "id": "E1-bulk-030",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "object-omission"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The novel ___ the literature class is discussing this week was written in the 1920s.",
    "options": [
      "who",
      "what",
      "that",
      "whose"
    ],
    "answerIndex": 2,
    "explanationVi": "\"That\" hoặc \"which\" làm tân ngữ trong mệnh đề xác định. Có thể bỏ luôn đại từ. \"Who\" cho người, \"what\" không phải đại từ quan hệ chính thức.",
    "sentenceVi": "Cuốn tiểu thuyết mà lớp văn học đang thảo luận tuần này được viết vào thập niên 1920.",
    "vocabNotes": [
      {
        "word": "novel",
        "pos": "danh từ",
        "vi": "tiểu thuyết"
      },
      {
        "word": "literature",
        "pos": "danh từ",
        "vi": "văn học"
      }
    ]
  },
  {
    "id": "E1-bulk-031",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "where-vs-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The factory ___ I worked last summer has just announced a major expansion.",
    "options": [
      "which",
      "where",
      "what",
      "who"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Where\" thay cho địa điểm và đóng vai trò trạng ngữ. \"Which\" cũng được nhưng cần giới từ \"at/in\". Không cần ở \"where\".",
    "sentenceVi": "Nhà máy nơi tôi làm việc mùa hè năm ngoái vừa thông báo mở rộng lớn.",
    "vocabNotes": [
      {
        "word": "factory",
        "pos": "danh từ",
        "vi": "nhà máy"
      },
      {
        "word": "expansion",
        "pos": "danh từ",
        "vi": "mở rộng"
      }
    ]
  },
  {
    "id": "E1-bulk-032",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "person-defining"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The lawyer ___ defended my brother in court is highly respected.",
    "options": [
      "who",
      "which",
      "where",
      "whose"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Who\" thay cho người (the lawyer) làm chủ ngữ. \"Which\" cho vật, không cho người.",
    "sentenceVi": "Luật sư đã bào chữa cho anh trai tôi trước tòa rất được kính trọng.",
    "vocabNotes": [
      {
        "word": "lawyer",
        "pos": "danh từ",
        "vi": "luật sư"
      },
      {
        "word": "court",
        "pos": "danh từ",
        "vi": "toà án"
      }
    ]
  },
  {
    "id": "E1-bulk-033",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "non-defining-thing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The Eiffel Tower, ___ was completed in 1889, remains one of the most visited monuments in the world.",
    "options": [
      "that",
      "where",
      "which",
      "who"
    ],
    "answerIndex": 2,
    "explanationVi": "Mệnh đề quan hệ không xác định (có dấu phẩy) chỉ vật → dùng \"which\", không dùng \"that\".",
    "sentenceVi": "Tháp Eiffel, vốn được hoàn thành vào năm 1889, vẫn là một trong những di tích được tham quan nhiều nhất thế giới.",
    "vocabNotes": [
      {
        "word": "complete",
        "pos": "động từ",
        "vi": "hoàn thành"
      },
      {
        "word": "monument",
        "pos": "danh từ",
        "vi": "di tích / công trình kỷ niệm"
      }
    ]
  },
  {
    "id": "E1-bulk-034",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "whom-formal"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The applicant ___ we hired last week starts on Monday.",
    "options": [
      "who",
      "whom",
      "which",
      "whose"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Whom\" làm tân ngữ trong văn viết trang trọng (\"we hired whom\"). \"Who\" cũng được dùng phổ biến trong văn nói.",
    "sentenceVi": "Ứng viên mà chúng tôi tuyển tuần trước sẽ bắt đầu vào thứ Hai.",
    "vocabNotes": [
      {
        "word": "applicant",
        "pos": "danh từ",
        "vi": "ứng viên"
      },
      {
        "word": "hire",
        "pos": "động từ",
        "vi": "tuyển dụng"
      }
    ]
  },
  {
    "id": "E1-bulk-035",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "relative-clause",
      "people-everyone"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Everyone ___ attended the workshop received a certificate of completion.",
    "options": [
      "which",
      "who",
      "where",
      "what"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Who\" thay cho người. Sau từ chỉ người tổng quát như \"everyone/anyone\", dùng \"who\" hoặc \"that\".",
    "sentenceVi": "Mọi người tham dự buổi tập huấn đều nhận được chứng chỉ hoàn thành.",
    "vocabNotes": [
      {
        "word": "workshop",
        "pos": "danh từ",
        "vi": "buổi tập huấn"
      },
      {
        "word": "certificate of completion",
        "pos": "cụm từ",
        "vi": "chứng chỉ hoàn thành"
      }
    ]
  },
  {
    "id": "E1-bulk-036",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "those-who"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Those ___ register before Friday will receive a 20% discount on the conference fee.",
    "options": [
      "which",
      "who",
      "when",
      "whose"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Those who\" = \"những người mà\". \"Who\" thay cho người. Đây là cấu trúc thông dụng.",
    "sentenceVi": "Những người đăng ký trước thứ Sáu sẽ nhận được giảm giá 20% cho phí hội nghị.",
    "vocabNotes": [
      {
        "word": "register",
        "pos": "động từ",
        "vi": "đăng ký"
      },
      {
        "word": "discount",
        "pos": "danh từ",
        "vi": "giảm giá"
      }
    ]
  },
  {
    "id": "E1-bulk-037",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "during-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The conference, during ___ several key partnerships were formed, lasted three days.",
    "options": [
      "who",
      "which",
      "when",
      "where"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ phải dùng \"which\" (cho vật) hoặc \"whom\" (cho người). \"During when/where\" không đúng cấu trúc.",
    "sentenceVi": "Hội nghị, trong suốt thời gian đó nhiều quan hệ đối tác quan trọng đã được hình thành, kéo dài ba ngày.",
    "vocabNotes": [
      {
        "word": "partnership",
        "pos": "danh từ",
        "vi": "quan hệ đối tác"
      },
      {
        "word": "last",
        "pos": "động từ",
        "vi": "kéo dài"
      }
    ]
  },
  {
    "id": "E1-bulk-038",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "company-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Apple, ___ headquarters are in Cupertino, was founded in 1976.",
    "options": [
      "who",
      "which",
      "whose",
      "where"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Whose\" có thể dùng để chỉ sở hữu cho cả người và tổ chức/vật. \"Whose headquarters\" = trụ sở của công ty đó.",
    "sentenceVi": "Apple, công ty có trụ sở chính ở Cupertino, được thành lập vào năm 1976.",
    "vocabNotes": [
      {
        "word": "headquarters",
        "pos": "danh từ",
        "vi": "trụ sở chính"
      },
      {
        "word": "found",
        "pos": "động từ",
        "vi": "thành lập"
      }
    ]
  },
  {
    "id": "E1-bulk-039",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "by-which"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The method by ___ they solved the problem became a case study at business schools.",
    "options": [
      "who",
      "which",
      "where",
      "that"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ \"by\" cho vật dùng \"which\". \"That\" không đi sau giới từ.",
    "sentenceVi": "Phương pháp mà họ dùng để giải quyết vấn đề đã trở thành một case study tại các trường kinh doanh.",
    "vocabNotes": [
      {
        "word": "method",
        "pos": "danh từ",
        "vi": "phương pháp"
      },
      {
        "word": "case study",
        "pos": "cụm từ",
        "vi": "nghiên cứu tình huống"
      }
    ]
  },
  {
    "id": "E1-bulk-040",
    "topicId": "E1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "relative-clause",
      "place-non-defining"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We visited the gallery, ___ houses an impressive collection of modern art.",
    "options": [
      "that",
      "where",
      "which",
      "who"
    ],
    "answerIndex": 2,
    "explanationVi": "Mệnh đề quan hệ không xác định (có dấu phẩy) cho vật dùng \"which\". \"Where\" không làm chủ ngữ cho \"houses\".",
    "sentenceVi": "Chúng tôi đã đến phòng tranh, nơi sở hữu một bộ sưu tập nghệ thuật hiện đại ấn tượng.",
    "vocabNotes": [
      {
        "word": "gallery",
        "pos": "danh từ",
        "vi": "phòng tranh"
      },
      {
        "word": "house",
        "pos": "động từ",
        "vi": "chứa / sở hữu"
      },
      {
        "word": "collection",
        "pos": "danh từ",
        "vi": "bộ sưu tập"
      }
    ]
  }
];
