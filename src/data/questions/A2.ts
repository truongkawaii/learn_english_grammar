import type { Question } from "@/types";

// Topic A2 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "A2-gen01",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "sentence-structure",
      "subject-verb"
    ],
    "prompt": "Chọn đáp án phù hợp để hoàn thành câu:",
    "sentence": "The marketing team ___ the new campaign strategy yesterday.",
    "options": [
      "discuss",
      "discussed",
      "discussing",
      "discussion"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu cần một động từ chính (V) chia ở thì quá khứ đơn do có trạng ngữ chỉ thời gian 'yesterday'. 'Discussed' đóng vai trò là vị ngữ của chủ ngữ 'The marketing team'.",
    "sentenceVi": "Nhóm tiếp thị đã thảo luận chiến lược chiến dịch mới vào hôm qua.",
    "vocabNotes": [
      {
        "word": "marketing team",
        "pos": "cụm từ",
        "vi": "đội tiếp thị"
      },
      {
        "word": "discussed",
        "pos": "động từ",
        "vi": "thảo luận"
      },
      {
        "word": "campaign",
        "pos": "danh từ",
        "vi": "chiến dịch"
      },
      {
        "word": "strategy",
        "pos": "danh từ",
        "vi": "chiến lược"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ]
  },
  {
    "id": "A2-gen02",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "linking-verbs",
      "complements"
    ],
    "prompt": "Điền một tính từ thích hợp để đóng vai trò làm bổ ngữ (complement):",
    "sentence": "The proposed merger sounds ___ to all the shareholders.",
    "explanationVi": "Sau động từ nối (linking verb) 'sounds', ta cần một tính từ làm bổ ngữ cho chủ ngữ (subject complement) để miêu tả tính chất của cuộc sáp nhập.",
    "sentenceVi": "Vụ sáp nhập được đề xuất nghe có vẻ có lợi cho tất cả các cổ đông.",
    "vocabNotes": [
      {
        "word": "proposed",
        "pos": "tính từ",
        "vi": "được đề xuất"
      },
      {
        "word": "merger",
        "pos": "danh từ",
        "vi": "vụ sáp nhập"
      },
      {
        "word": "sounds",
        "pos": "động từ",
        "vi": "nghe có vẻ"
      },
      {
        "word": "beneficial",
        "pos": "tính từ",
        "vi": "có lợi"
      },
      {
        "word": "shareholders",
        "pos": "danh từ",
        "vi": "cổ đông"
      }
    ],
    "options": [
      "important",
      "reasonable",
      "beneficial",
      "attractive"
    ],
    "answerIndex": 2
  },
  {
    "id": "A2-gen03",
    "topicId": "A2",
    "type": "wordOrder",
    "difficulty": 1,
    "tags": [
      "imperative-clauses"
    ],
    "prompt": "Sắp xếp các từ sau thành một câu mệnh lệnh hoàn chỉnh:",
    "tiles": [
      "Please",
      "the",
      "files",
      "submit",
      "before",
      "Friday"
    ],
    "answer": "Please submit the files before Friday",
    "explanationVi": "Đây là câu mệnh lệnh (imperative clause) bắt đầu bằng động từ nguyên thể 'submit'. 'Please' được thêm vào để tăng tính lịch sự.",
    "sentenceVi": "Vui lòng nộp các tập tin trước thứ Sáu.",
    "vocabNotes": [
      {
        "word": "Please",
        "pos": "trạng từ",
        "vi": "vui lòng"
      },
      {
        "word": "submit",
        "pos": "động từ",
        "vi": "nộp"
      },
      {
        "word": "files",
        "pos": "danh từ",
        "vi": "tập tin"
      },
      {
        "word": "before",
        "pos": "giới từ",
        "vi": "trước"
      },
      {
        "word": "Friday",
        "pos": "danh từ",
        "vi": "thứ Sáu"
      }
    ]
  },
  {
    "id": "A2-gen04",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "transitive-verbs",
      "objects"
    ],
    "prompt": "Chọn động từ phù hợp để đi kèm với tân ngữ phía sau:",
    "sentence": "Mr. Smith ___ the contract after reviewing all the terms.",
    "options": [
      "signed",
      "waited",
      "laughed",
      "arrived"
    ],
    "answerIndex": 0,
    "explanationVi": "'Sign' là một ngoại động từ (transitive verb) nên cần một tân ngữ là 'the contract' theo sau. Các phương án còn lại là nội động từ.",
    "sentenceVi": "Ông Smith đã ký hợp đồng sau khi xem xét tất cả các điều khoản.",
    "vocabNotes": [
      {
        "word": "signed",
        "pos": "động từ",
        "vi": "đã ký"
      },
      {
        "word": "contract",
        "pos": "danh từ",
        "vi": "hợp đồng"
      },
      {
        "word": "after",
        "pos": "liên từ",
        "vi": "sau khi"
      },
      {
        "word": "reviewing",
        "pos": "động từ",
        "vi": "xem xét"
      },
      {
        "word": "terms",
        "pos": "danh từ",
        "vi": "điều khoản"
      }
    ]
  },
  {
    "id": "A2-gen05",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "interrogative-clauses"
    ],
    "prompt": "Điền trợ động từ phù hợp để hoàn thành câu hỏi:",
    "sentence": "___ you attend the seminar on digital marketing last week?",
    "explanationVi": "Trong câu nghi vấn ở thì quá khứ đơn, ta sử dụng trợ động từ 'Did' đảo lên trước chủ ngữ.",
    "sentenceVi": "Bạn có tham dự buổi hội thảo về tiếp thị kỹ thuật số tuần trước không?",
    "vocabNotes": [
      {
        "word": "attend",
        "pos": "động từ",
        "vi": "tham dự"
      },
      {
        "word": "seminar",
        "pos": "danh từ",
        "vi": "hội thảo"
      },
      {
        "word": "digital marketing",
        "pos": "cụm từ",
        "vi": "tiếp thị kỹ thuật số"
      },
      {
        "word": "last week",
        "pos": "cụm từ",
        "vi": "tuần trước"
      }
    ],
    "options": [
      "Were",
      "Do",
      "Did",
      "Have"
    ],
    "answerIndex": 2
  },
  {
    "id": "A2-gen06",
    "topicId": "A2",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "compound-sentences",
      "conjunctions"
    ],
    "prompt": "Sắp xếp các từ thành một câu ghép (compound sentence):",
    "tiles": [
      "She",
      "was",
      "tired",
      "but",
      "she",
      "finished",
      "the",
      "report"
    ],
    "answer": "She was tired but she finished the report",
    "explanationVi": "Câu ghép này gồm hai mệnh đề chính được nối với nhau bằng liên từ kết hợp 'but' để chỉ sự đối lập.",
    "sentenceVi": "Cô ấy mệt nhưng cô ấy đã hoàn thành báo cáo.",
    "vocabNotes": [
      {
        "word": "tired",
        "pos": "tính từ",
        "vi": "mệt mỏi"
      },
      {
        "word": "finished",
        "pos": "động từ",
        "vi": "hoàn thành"
      },
      {
        "word": "report",
        "pos": "danh từ",
        "vi": "báo cáo"
      }
    ]
  },
  {
    "id": "A2-gen07",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "complex-sentences",
      "subordinating-conjunctions"
    ],
    "prompt": "Chọn liên từ phù hợp để tạo thành câu phức:",
    "sentence": "___ the weather was bad, the outdoor corporate event was not canceled.",
    "options": [
      "Because",
      "Although",
      "If",
      "Since"
    ],
    "answerIndex": 1,
    "explanationVi": "Đây là câu phức (complex sentence). 'Although' là liên từ phụ thuộc dùng để nối mệnh đề phụ chỉ sự nhượng bộ/tương phản với mệnh đề chính.",
    "sentenceVi": "Mặc dù thời tiết xấu, sự kiện doanh nghiệp ngoài trời đã không bị hủy bỏ.",
    "vocabNotes": [
      {
        "word": "Although",
        "pos": "liên từ",
        "vi": "mặc dù"
      },
      {
        "word": "weather",
        "pos": "danh từ",
        "vi": "thời tiết"
      },
      {
        "word": "bad",
        "pos": "tính từ",
        "vi": "xấu"
      },
      {
        "word": "outdoor",
        "pos": "tính từ",
        "vi": "ngoài trời"
      },
      {
        "word": "corporate",
        "pos": "tính từ",
        "vi": "doanh nghiệp"
      },
      {
        "word": "event",
        "pos": "danh từ",
        "vi": "sự kiện"
      },
      {
        "word": "canceled",
        "pos": "động từ",
        "vi": "hủy bỏ"
      }
    ]
  },
  {
    "id": "A2-gen08",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adjuncts"
    ],
    "prompt": "Điền một trạng từ làm sung ngữ (adjunct) để bổ sung ý nghĩa cho câu:",
    "sentence": "The technician fixed the server ___ so that the website could go live.",
    "explanationVi": "Trạng từ đóng vai trò là sung ngữ (adjunct), cung cấp thêm thông tin về cách thức thực hiện hành động 'fixed' mà không làm thay đổi cấu trúc cốt lõi của câu.",
    "sentenceVi": "Kỹ thuật viên đã sửa máy chủ nhanh chóng để trang web có thể hoạt động.",
    "vocabNotes": [
      {
        "word": "technician",
        "pos": "danh từ",
        "vi": "kỹ thuật viên"
      },
      {
        "word": "fixed",
        "pos": "động từ",
        "vi": "sửa chữa"
      },
      {
        "word": "server",
        "pos": "danh từ",
        "vi": "máy chủ"
      },
      {
        "word": "quickly",
        "pos": "trạng từ",
        "vi": "nhanh chóng"
      },
      {
        "word": "so that",
        "pos": "liên từ",
        "vi": "để mà"
      },
      {
        "word": "go live",
        "pos": "cụm từ",
        "vi": "hoạt động"
      }
    ],
    "options": [
      "properly",
      "quickly",
      "efficiently",
      "carefully"
    ],
    "answerIndex": 1
  },
  {
    "id": "A2-gen09",
    "topicId": "A2",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "imperative-clauses",
      "let"
    ],
    "prompt": "Sắp xếp các từ thành câu mệnh lệnh với 'Let':",
    "tiles": [
      "Let",
      "us",
      "know",
      "your",
      "decision",
      "soon"
    ],
    "answer": "Let us know your decision soon",
    "explanationVi": "Cấu trúc 'Let + object + V-bare' được sử dụng trong câu mệnh lệnh để đưa ra một yêu cầu hoặc đề nghị.",
    "sentenceVi": "Hãy cho chúng tôi biết quyết định của bạn sớm.",
    "vocabNotes": [
      {
        "word": "Let us know",
        "pos": "cụm từ",
        "vi": "hãy cho biết"
      },
      {
        "word": "decision",
        "pos": "danh từ",
        "vi": "quyết định"
      },
      {
        "word": "soon",
        "pos": "trạng từ",
        "vi": "sớm"
      }
    ]
  },
  {
    "id": "A2-gen10",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "object-complements"
    ],
    "prompt": "Chọn từ phù hợp đóng vai trò bổ ngữ cho tân ngữ (object complement):",
    "sentence": "The board of directors elected Ms. Janson ___ of the committee.",
    "options": [
      "chairperson",
      "chaired",
      "chairs",
      "chairing"
    ],
    "answerIndex": 0,
    "explanationVi": "'Chairperson' là danh từ đóng vai trò bổ ngữ cho tân ngữ (object complement) 'Ms. Janson', giúp hoàn thiện ý nghĩa cho động từ 'elected'.",
    "sentenceVi": "Hội đồng quản trị đã bầu bà Janson làm chủ tịch ủy ban.",
    "vocabNotes": [
      {
        "word": "board of directors",
        "pos": "cụm từ",
        "vi": "hội đồng quản trị"
      },
      {
        "word": "elected",
        "pos": "động từ",
        "vi": "bầu"
      },
      {
        "word": "chairperson",
        "pos": "danh từ",
        "vi": "chủ tịch"
      },
      {
        "word": "committee",
        "pos": "danh từ",
        "vi": "ủy ban"
      }
    ]
  },
  {
    "id": "A2-bulk-001",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "clauses",
      "adjuncts",
      "adverbs"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The newly developed software runs ___ on older systems.",
    "options": [
      "efficient",
      "efficiently",
      "efficiency",
      "more efficient"
    ],
    "answerIndex": 1,
    "explanationVi": "Chỗ trống cần một trạng từ để bổ nghĩa cho động từ \"runs\" (chạy như thế nào). \"Efficiently\" là trạng từ phù hợp.",
    "sentenceVi": "Phần mềm mới phát triển chạy hiệu quả trên các hệ thống cũ hơn.",
    "vocabNotes": [
      {
        "word": "newly developed",
        "pos": "cụm từ",
        "vi": "mới phát triển"
      },
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      },
      {
        "word": "runs",
        "pos": "động từ",
        "vi": "chạy"
      },
      {
        "word": "efficiently",
        "pos": "trạng từ",
        "vi": "hiệu quả"
      },
      {
        "word": "older systems",
        "pos": "cụm từ",
        "vi": "các hệ thống cũ hơn"
      }
    ]
  },
  {
    "id": "A2-bulk-002",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "clauses",
      "modal-verbs",
      "transitive-verbs"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The management team must ___ a comprehensive risk assessment.",
    "options": [
      "conducts",
      "conducting",
      "conduct",
      "to conduct"
    ],
    "answerIndex": 2,
    "explanationVi": "Sau động từ khuyết thiếu \"must\" (phải), động từ chính cần ở dạng nguyên thể không \"to\" (bare infinitive).",
    "sentenceVi": "Đội ngũ quản lý phải tiến hành đánh giá rủi ro toàn diện.",
    "vocabNotes": [
      {
        "word": "management team",
        "pos": "cụm từ",
        "vi": "đội ngũ quản lý"
      },
      {
        "word": "must",
        "pos": "động từ khuyết thiếu",
        "vi": "phải"
      },
      {
        "word": "conduct",
        "pos": "động từ",
        "vi": "tiến hành"
      },
      {
        "word": "comprehensive",
        "pos": "tính từ",
        "vi": "toàn diện"
      },
      {
        "word": "risk assessment",
        "pos": "cụm từ",
        "vi": "đánh giá rủi ro"
      }
    ]
  },
  {
    "id": "A2-bulk-003",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "clauses",
      "linking-verbs",
      "complements"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "After the presentation, the CEO appeared quite ___ with the results.",
    "options": [
      "impress",
      "impressive",
      "impressed",
      "impression"
    ],
    "answerIndex": 2,
    "explanationVi": "Động từ nối \"appeared\" (có vẻ) cần một tính từ bổ nghĩa cho chủ ngữ \"the CEO\". \"Impressed\" là tính từ chỉ cảm xúc, miêu tả trạng thái của CEO.",
    "sentenceVi": "Sau buổi thuyết trình, CEO có vẻ khá ấn tượng với kết quả.",
    "vocabNotes": [
      {
        "word": "presentation",
        "pos": "danh từ",
        "vi": "buổi thuyết trình"
      },
      {
        "word": "CEO",
        "pos": "danh từ",
        "vi": "Giám đốc điều hành"
      },
      {
        "word": "appeared",
        "pos": "động từ",
        "vi": "có vẻ, dường như"
      },
      {
        "word": "impressed",
        "pos": "tính từ",
        "vi": "ấn tượng"
      },
      {
        "word": "results",
        "pos": "danh từ",
        "vi": "kết quả"
      }
    ]
  },
  {
    "id": "A2-bulk-004",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "clauses",
      "imperative",
      "negative-commands"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ make any unauthorized changes to the network settings.",
    "options": [
      "Not",
      "Don't",
      "Never",
      "Doesn't"
    ],
    "answerIndex": 1,
    "explanationVi": "Để tạo câu mệnh lệnh phủ định, chúng ta sử dụng cấu trúc \"Don't\" + động từ nguyên thể.",
    "sentenceVi": "Không được thực hiện bất kỳ thay đổi trái phép nào đối với cài đặt mạng.",
    "vocabNotes": [
      {
        "word": "Don't",
        "pos": "trợ động từ",
        "vi": "đừng, không"
      },
      {
        "word": "unauthorized",
        "pos": "tính từ",
        "vi": "trái phép"
      },
      {
        "word": "changes",
        "pos": "danh từ",
        "vi": "thay đổi"
      },
      {
        "word": "network settings",
        "pos": "cụm từ",
        "vi": "cài đặt mạng"
      }
    ]
  },
  {
    "id": "A2-bulk-005",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "clauses",
      "interrogative",
      "present-perfect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ the project team submitted their final report yet?",
    "options": [
      "Did",
      "Has",
      "Is",
      "Do"
    ],
    "answerIndex": 1,
    "explanationVi": "Trong câu hỏi thì Hiện tại hoàn thành, chúng ta dùng trợ động từ \"Has\" (đối với chủ ngữ số ít như \"the project team\") hoặc \"Have\" trước chủ ngữ, sau đó là động từ chính ở dạng V3/ed (\"submitted\").",
    "sentenceVi": "Liệu đội dự án đã nộp báo cáo cuối cùng của họ chưa?",
    "vocabNotes": [
      {
        "word": "project team",
        "pos": "cụm từ",
        "vi": "đội dự án"
      },
      {
        "word": "submitted",
        "pos": "động từ",
        "vi": "đã nộp"
      },
      {
        "word": "final report",
        "pos": "cụm từ",
        "vi": "báo cáo cuối cùng"
      },
      {
        "word": "yet",
        "pos": "trạng từ",
        "vi": "chưa"
      }
    ]
  },
  {
    "id": "A2-bulk-006",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "sentences",
      "complex-sentences",
      "adjuncts",
      "prepositions"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ the severe weather conditions, the outdoor concert proceeded as scheduled.",
    "options": [
      "Despite",
      "Although",
      "Because",
      "Therefore"
    ],
    "answerIndex": 0,
    "explanationVi": "Chỗ trống cần một từ hoặc cụm từ nối thể hiện sự đối lập và được theo sau bởi một cụm danh từ (\"the severe weather conditions\"). \"Despite\" (mặc dù) là giới từ phù hợp.",
    "sentenceVi": "Mặc dù điều kiện thời tiết khắc nghiệt, buổi hòa nhạc ngoài trời vẫn diễn ra theo đúng lịch trình.",
    "vocabNotes": [
      {
        "word": "Despite",
        "pos": "giới từ",
        "vi": "mặc dù"
      },
      {
        "word": "severe",
        "pos": "tính từ",
        "vi": "khắc nghiệt"
      },
      {
        "word": "weather conditions",
        "pos": "cụm từ",
        "vi": "điều kiện thời tiết"
      },
      {
        "word": "outdoor concert",
        "pos": "cụm từ",
        "vi": "buổi hòa nhạc ngoài trời"
      },
      {
        "word": "proceeded as scheduled",
        "pos": "cụm từ",
        "vi": "diễn ra theo đúng lịch trình"
      }
    ]
  },
  {
    "id": "A2-bulk-007",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "clauses",
      "object-complement",
      "verbs-of-consideration"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The board of directors considered the proposal ___ for immediate implementation.",
    "options": [
      "feasibility",
      "feasible",
      "feasibly",
      "to be feasible"
    ],
    "answerIndex": 1,
    "explanationVi": "Động từ \"considered\" (xem xét) trong cấu trúc \"consider + O + C\" (coi cái gì đó như thế nào) yêu cầu một tính từ (\"feasible\") làm bổ ngữ cho tân ngữ \"the proposal\", miêu tả tính chất của nó.",
    "sentenceVi": "Hội đồng quản trị đã xem xét đề xuất khả thi để thực hiện ngay lập tức.",
    "vocabNotes": [
      {
        "word": "board of directors",
        "pos": "cụm từ",
        "vi": "hội đồng quản trị"
      },
      {
        "word": "considered",
        "pos": "động từ",
        "vi": "xem xét"
      },
      {
        "word": "proposal",
        "pos": "danh từ",
        "vi": "đề xuất"
      },
      {
        "word": "feasible",
        "pos": "tính từ",
        "vi": "khả thi"
      },
      {
        "word": "immediate implementation",
        "pos": "cụm từ",
        "vi": "thực hiện ngay lập tức"
      }
    ]
  },
  {
    "id": "A2-bulk-008",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "clauses",
      "object-complement",
      "phrasal-verbs"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The team's relentless efforts turned the failing project ___ success.",
    "options": [
      "into a",
      "to a",
      "at a",
      "for a"
    ],
    "answerIndex": 0,
    "explanationVi": "Cụm động từ \"turn X into Y\" có nghĩa là biến đổi X thành Y. \"Into a success\" đóng vai trò bổ ngữ cho tân ngữ \"the failing project\", miêu tả trạng thái kết quả của nó.",
    "sentenceVi": "Những nỗ lực không ngừng nghỉ của đội đã biến dự án thất bại thành công.",
    "vocabNotes": [
      {
        "word": "relentless",
        "pos": "tính từ",
        "vi": "không ngừng nghỉ"
      },
      {
        "word": "efforts",
        "pos": "danh từ",
        "vi": "nỗ lực"
      },
      {
        "word": "turned",
        "pos": "động từ",
        "vi": "biến đổi"
      },
      {
        "word": "failing project",
        "pos": "cụm từ",
        "vi": "dự án thất bại"
      },
      {
        "word": "success",
        "pos": "danh từ",
        "vi": "thành công"
      }
    ]
  },
  {
    "id": "A2-bulk-009",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "sentences",
      "compound-sentences",
      "conjunctions"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new security protocol was initially complex for users, ___ with training, they quickly adapted.",
    "options": [
      "nor",
      "for",
      "yet",
      "so"
    ],
    "answerIndex": 2,
    "explanationVi": "Liên từ \"yet\" (tuy nhiên/vậy mà) được dùng để nối hai mệnh đề độc lập có ý nghĩa tương phản. Mệnh đề đầu tiên nói về sự phức tạp, mệnh đề sau nói về sự thích nghi nhanh chóng.",
    "sentenceVi": "Giao thức bảo mật mới ban đầu phức tạp đối với người dùng, nhưng với sự đào tạo, họ đã nhanh chóng thích nghi.",
    "vocabNotes": [
      {
        "word": "security protocol",
        "pos": "cụm từ",
        "vi": "giao thức bảo mật"
      },
      {
        "word": "initially",
        "pos": "trạng từ",
        "vi": "ban đầu"
      },
      {
        "word": "complex",
        "pos": "tính từ",
        "vi": "phức tạp"
      },
      {
        "word": "yet",
        "pos": "liên từ",
        "vi": "nhưng, tuy nhiên"
      },
      {
        "word": "adapted",
        "pos": "động từ",
        "vi": "thích nghi"
      }
    ]
  },
  {
    "id": "A2-bulk-010",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "clauses",
      "imperative",
      "let"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ us review the project timeline before we finalize the budget.",
    "options": [
      "Allow",
      "Permit",
      "Let",
      "Have"
    ],
    "answerIndex": 2,
    "explanationVi": "Cấu trúc \"Let + tân ngữ + động từ nguyên mẫu\" được dùng để đưa ra gợi ý, đề xuất hoặc cho phép ai đó làm gì.",
    "sentenceVi": "Hãy để chúng tôi xem lại tiến độ dự án trước khi chúng tôi chốt ngân sách.",
    "vocabNotes": [
      {
        "word": "Let",
        "pos": "động từ",
        "vi": "hãy, để"
      },
      {
        "word": "review",
        "pos": "động từ",
        "vi": "xem lại"
      },
      {
        "word": "project timeline",
        "pos": "cụm từ",
        "vi": "tiến độ dự án"
      },
      {
        "word": "finalize",
        "pos": "động từ",
        "vi": "hoàn thiện, chốt"
      },
      {
        "word": "budget",
        "pos": "danh từ",
        "vi": "ngân sách"
      }
    ]
  },
  {
    "id": "A2-bulk-011",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "subject-verb-agreement",
      "declarative-clause",
      "business-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new software update significantly ___ system performance across all devices.",
    "options": [
      "improved",
      "improving",
      "improves",
      "to improve"
    ],
    "answerIndex": 2,
    "explanationVi": "Chủ ngữ là 'The new software update' (số ít) và đây là một mệnh đề trần thuật diễn tả sự thật hoặc hành động thường xuyên, nên động từ ở thì hiện tại đơn phải thêm -s.",
    "sentenceVi": "Bản cập nhật phần mềm mới cải thiện đáng kể hiệu suất hệ thống trên tất cả các thiết bị.",
    "vocabNotes": [
      {
        "word": "significantly",
        "pos": "trạng từ",
        "vi": "đáng kể"
      },
      {
        "word": "performance",
        "pos": "danh từ",
        "vi": "hiệu suất"
      },
      {
        "word": "across",
        "pos": "giới từ",
        "vi": "trên khắp"
      },
      {
        "word": "device",
        "pos": "danh từ",
        "vi": "thiết bị"
      }
    ]
  },
  {
    "id": "A2-bulk-012",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "linking-verb",
      "complement",
      "adjective",
      "business-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Despite the initial challenges, the team remained ___ throughout the development phase.",
    "options": [
      "optimistically",
      "optimism",
      "optimistic",
      "to be optimistic"
    ],
    "answerIndex": 2,
    "explanationVi": "Động từ 'remained' là một động từ nối (linking verb), nó cần một tính từ (adjective) theo sau để bổ nghĩa cho chủ ngữ 'the team'. Do đó, 'optimistic' là lựa chọn đúng.",
    "sentenceVi": "Bất chấp những thách thức ban đầu, đội ngũ vẫn lạc quan trong suốt giai đoạn phát triển.",
    "vocabNotes": [
      {
        "word": "despite",
        "pos": "giới từ",
        "vi": "mặc dù"
      },
      {
        "word": "challenge",
        "pos": "danh từ",
        "vi": "thách thức"
      },
      {
        "word": "remained",
        "pos": "động từ",
        "vi": "duy trì, vẫn"
      },
      {
        "word": "optimistic",
        "pos": "tính từ",
        "vi": "lạc quan"
      },
      {
        "word": "development phase",
        "pos": "cụm từ",
        "vi": "giai đoạn phát triển"
      }
    ]
  },
  {
    "id": "A2-bulk-013",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "imperative-clause",
      "negative-command",
      "safety-instructions"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ touch the fragile exhibits without permission.",
    "options": [
      "Not",
      "Doesn't",
      "Don't",
      "Aren't"
    ],
    "answerIndex": 2,
    "explanationVi": "Đây là một mệnh đề mệnh lệnh phủ định, cấu trúc đúng để đưa ra chỉ dẫn không làm gì đó là 'Don't' theo sau là động từ nguyên thể.",
    "sentenceVi": "Đừng chạm vào các vật trưng bày dễ vỡ khi chưa được phép.",
    "vocabNotes": [
      {
        "word": "fragile",
        "pos": "tính từ",
        "vi": "dễ vỡ"
      },
      {
        "word": "exhibit",
        "pos": "danh từ",
        "vi": "vật trưng bày"
      },
      {
        "word": "without permission",
        "pos": "cụm từ",
        "vi": "không được phép"
      }
    ]
  },
  {
    "id": "A2-bulk-014",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "adjunct",
      "adverb",
      "clause-structure",
      "business-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The manager reviewed the quarterly reports ___, noting several key discrepancies.",
    "options": [
      "thoroughly",
      "thorough",
      "more thorough",
      "be thorough"
    ],
    "answerIndex": 0,
    "explanationVi": "Chỗ trống cần một trạng từ (adjunct) để bổ nghĩa cho động từ 'reviewed', miêu tả cách thức hành động diễn ra. 'Thoroughly' (một cách kỹ lưỡng) là trạng từ phù hợp.",
    "sentenceVi": "Người quản lý đã xem xét các báo cáo hàng quý một cách kỹ lưỡng, ghi nhận một số điểm không nhất quán chính.",
    "vocabNotes": [
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "người quản lý"
      },
      {
        "word": "quarterly reports",
        "pos": "cụm danh từ",
        "vi": "báo cáo hàng quý"
      },
      {
        "word": "thoroughly",
        "pos": "trạng từ",
        "vi": "một cách kỹ lưỡng"
      },
      {
        "word": "noting",
        "pos": "động từ",
        "vi": "ghi nhận"
      },
      {
        "word": "discrepancy",
        "pos": "danh từ",
        "vi": "điểm không nhất quán, sai lệch"
      }
    ]
  },
  {
    "id": "A2-bulk-015",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "complex-sentence",
      "subordinating-conjunction",
      "dependent-clause",
      "business-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ the company faced significant financial setbacks, it managed to launch its new product line successfully.",
    "options": [
      "Despite",
      "Even though",
      "Because of",
      "In spite"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu này là một câu phức với mệnh đề phụ thuộc chỉ sự nhượng bộ. 'Even though' là liên từ phụ thuộc, được dùng để bắt đầu một mệnh đề phụ (S+V) và diễn tả sự đối lập. Các lựa chọn khác ('Despite', 'Because of', 'In spite of') cần theo sau bởi cụm danh từ hoặc V-ing, không phải một mệnh đề đầy đủ.",
    "sentenceVi": "Mặc dù công ty phải đối mặt với những thất bại tài chính đáng kể, họ vẫn xoay sở để ra mắt dòng sản phẩm mới một cách thành công.",
    "vocabNotes": [
      {
        "word": "significant",
        "pos": "tính từ",
        "vi": "đáng kể"
      },
      {
        "word": "financial setbacks",
        "pos": "cụm danh từ",
        "vi": "thất bại tài chính"
      },
      {
        "word": "managed to",
        "pos": "cụm từ",
        "vi": "xoay sở để"
      },
      {
        "word": "launch",
        "pos": "động từ",
        "vi": "ra mắt"
      },
      {
        "word": "product line",
        "pos": "cụm danh từ",
        "vi": "dòng sản phẩm"
      }
    ]
  },
  {
    "id": "A2-bulk-016",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "interrogative-clause",
      "auxiliary-verb",
      "daily-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you receive the confirmation email for your appointment?",
    "options": [
      "Do",
      "Did",
      "Have",
      "Are"
    ],
    "answerIndex": 1,
    "explanationVi": "Đây là một câu hỏi Yes/No trong thì quá khứ đơn (hành động 'receive' đã xảy ra). Trợ động từ phù hợp cho thì quá khứ đơn là 'Did' theo sau là động từ nguyên thể.",
    "sentenceVi": "Bạn đã nhận được email xác nhận cho cuộc hẹn của mình chưa?",
    "vocabNotes": [
      {
        "word": "receive",
        "pos": "động từ",
        "vi": "nhận"
      },
      {
        "word": "confirmation email",
        "pos": "cụm danh từ",
        "vi": "email xác nhận"
      },
      {
        "word": "appointment",
        "pos": "danh từ",
        "vi": "cuộc hẹn"
      }
    ]
  },
  {
    "id": "A2-bulk-017",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "compound-sentence",
      "coordinating-conjunction",
      "academic-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The students studied diligently for their exams, ___ they also participated in various extracurricular activities.",
    "options": [
      "so",
      "for",
      "nor",
      "and"
    ],
    "answerIndex": 3,
    "explanationVi": "Câu này là một câu ghép, nối hai mệnh đề độc lập với ý nghĩa bổ sung cho nhau. Liên từ kết hợp 'and' (và) là phù hợp nhất để thể hiện việc học sinh vừa học chăm chỉ vừa tham gia các hoạt động ngoại khóa.",
    "sentenceVi": "Các sinh viên đã học tập chăm chỉ cho các kỳ thi của họ, và họ cũng tham gia vào nhiều hoạt động ngoại khóa khác nhau.",
    "vocabNotes": [
      {
        "word": "diligently",
        "pos": "trạng từ",
        "vi": "chăm chỉ"
      },
      {
        "word": "exams",
        "pos": "danh từ",
        "vi": "các kỳ thi"
      },
      {
        "word": "participated in",
        "pos": "cụm động từ",
        "vi": "tham gia vào"
      },
      {
        "word": "extracurricular activities",
        "pos": "cụm danh từ",
        "vi": "các hoạt động ngoại khóa"
      }
    ]
  },
  {
    "id": "A2-bulk-018",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "imperative-clause",
      "let-construction",
      "business-context",
      "teamwork"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Before making a final decision, ___ the project team evaluate all potential risks.",
    "options": [
      "let",
      "allows",
      "letting",
      "to let"
    ],
    "answerIndex": 0,
    "explanationVi": "Đây là một dạng mệnh lệnh dùng 'Let' để đưa ra gợi ý hoặc cho phép ai đó làm gì, với cấu trúc 'Let + đại từ/tân ngữ + động từ nguyên thể'.",
    "sentenceVi": "Trước khi đưa ra quyết định cuối cùng, hãy để đội dự án đánh giá tất cả các rủi ro tiềm ẩn.",
    "vocabNotes": [
      {
        "word": "final decision",
        "pos": "cụm danh từ",
        "vi": "quyết định cuối cùng"
      },
      {
        "word": "project team",
        "pos": "cụm danh từ",
        "vi": "đội dự án"
      },
      {
        "word": "evaluate",
        "pos": "động từ",
        "vi": "đánh giá"
      },
      {
        "word": "potential risks",
        "pos": "cụm danh từ",
        "vi": "các rủi ro tiềm ẩn"
      }
    ]
  },
  {
    "id": "A2-bulk-019",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "complement",
      "verb-complement",
      "adjective",
      "daily-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The unexpected news rendered everyone in the room ___ for a moment.",
    "options": [
      "speechless",
      "speechlessly",
      "no speech",
      "to speak"
    ],
    "answerIndex": 0,
    "explanationVi": "Động từ 'rendered' (khiến cho) theo sau bởi tân ngữ ('everyone in the room') cần một bổ ngữ là tính từ ('speechless') để mô tả trạng thái của tân ngữ. 'Speechlessly' là trạng từ, không phù hợp ở đây.",
    "sentenceVi": "Tin tức bất ngờ đã khiến mọi người trong phòng chết lặng trong giây lát.",
    "vocabNotes": [
      {
        "word": "unexpected",
        "pos": "tính từ",
        "vi": "không mong đợi"
      },
      {
        "word": "rendered",
        "pos": "động từ",
        "vi": "khiến cho, làm cho"
      },
      {
        "word": "speechless",
        "pos": "tính từ",
        "vi": "câm nín, không nói nên lời"
      },
      {
        "word": "for a moment",
        "pos": "cụm từ",
        "vi": "trong giây lát"
      }
    ]
  },
  {
    "id": "A2-bulk-020",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "subject-verb-agreement",
      "transitive-verb",
      "declarative-clause",
      "business-context"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new regulations ___ immediate action from all departments to ensure compliance.",
    "options": [
      "demand",
      "demanding",
      "to demand",
      "demands"
    ],
    "answerIndex": 0,
    "explanationVi": "Chủ ngữ 'The new regulations' là danh từ số nhiều, nên động từ ở thì hiện tại đơn phải giữ nguyên dạng 'demand' (không thêm -s). Động từ 'demand' là ngoại động từ, cần tân ngữ đi kèm ('immediate action').",
    "sentenceVi": "Các quy định mới yêu cầu hành động ngay lập tức từ tất cả các phòng ban để đảm bảo tuân thủ.",
    "vocabNotes": [
      {
        "word": "regulations",
        "pos": "danh từ",
        "vi": "các quy định"
      },
      {
        "word": "demand",
        "pos": "động từ",
        "vi": "yêu cầu"
      },
      {
        "word": "immediate action",
        "pos": "cụm danh từ",
        "vi": "hành động ngay lập tức"
      },
      {
        "word": "department",
        "pos": "danh từ",
        "vi": "phòng ban"
      },
      {
        "word": "ensure compliance",
        "pos": "cụm từ",
        "vi": "đảm bảo tuân thủ"
      }
    ]
  },
  {
    "id": "A2-bulk-021",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "linking-verb",
      "sensory-adjective"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This coffee tastes ___ to me; it must be expired.",
    "options": [
      "bad",
      "badly",
      "worse",
      "worst"
    ],
    "answerIndex": 0,
    "explanationVi": "Sau linking verb \"taste\" dùng tính từ, không dùng trạng từ. \"Bad\" mô tả mùi vị xấu.",
    "sentenceVi": "Cà phê này có vị tệ với tôi; chắc đã hết hạn.",
    "vocabNotes": [
      {
        "word": "taste",
        "pos": "động từ",
        "vi": "có vị"
      },
      {
        "word": "expired",
        "pos": "tính từ",
        "vi": "hết hạn"
      }
    ]
  },
  {
    "id": "A2-bulk-022",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "imperative",
      "negative-imperative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ open this door under any circumstances.",
    "options": [
      "No",
      "Not",
      "Don't",
      "Doesn't"
    ],
    "answerIndex": 2,
    "explanationVi": "Câu mệnh lệnh phủ định bắt đầu bằng \"Don't\" + động từ nguyên mẫu.",
    "sentenceVi": "Đừng mở cửa này trong bất kỳ trường hợp nào.",
    "vocabNotes": [
      {
        "word": "under any circumstances",
        "pos": "cụm từ",
        "vi": "trong bất kỳ tình huống nào"
      }
    ]
  },
  {
    "id": "A2-bulk-023",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "past-simple",
      "yes-no-question"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ the new intern arrive on time yesterday?",
    "options": [
      "Was",
      "Did",
      "Has",
      "Does"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu nghi vấn quá khứ đơn dùng \"Did\" + chủ ngữ + động từ nguyên mẫu.",
    "sentenceVi": "Thực tập sinh mới có đến đúng giờ ngày hôm qua không?",
    "vocabNotes": [
      {
        "word": "intern",
        "pos": "danh từ",
        "vi": "thực tập sinh"
      },
      {
        "word": "on time",
        "pos": "cụm từ",
        "vi": "đúng giờ"
      }
    ]
  },
  {
    "id": "A2-bulk-024",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "linking-verb",
      "feel"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "After the long flight, the passengers felt ___ and went straight to bed.",
    "options": [
      "exhaust",
      "exhausted",
      "exhausting",
      "exhaustion"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau linking verb \"feel\" dùng tính từ. \"Exhausted\" (kiệt sức) mô tả cảm giác của người.",
    "sentenceVi": "Sau chuyến bay dài, các hành khách cảm thấy kiệt sức và đi thẳng đến giường ngủ.",
    "vocabNotes": [
      {
        "word": "exhausted",
        "pos": "tính từ",
        "vi": "kiệt sức"
      },
      {
        "word": "passengers",
        "pos": "danh từ",
        "vi": "hành khách"
      }
    ]
  },
  {
    "id": "A2-bulk-025",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "imperative",
      "polite-request"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ submit your timesheet by Friday afternoon.",
    "options": [
      "Please",
      "Let",
      "Have",
      "Make"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Please\" + động từ nguyên mẫu là cách lịch sự để ra mệnh lệnh hoặc yêu cầu.",
    "sentenceVi": "Vui lòng nộp bảng chấm công của bạn trước chiều thứ Sáu.",
    "vocabNotes": [
      {
        "word": "submit",
        "pos": "động từ",
        "vi": "nộp"
      },
      {
        "word": "timesheet",
        "pos": "danh từ",
        "vi": "bảng chấm công"
      }
    ]
  },
  {
    "id": "A2-bulk-026",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "causative",
      "make"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The supervisor made the employees ___ the safety training again.",
    "options": [
      "attend",
      "to attend",
      "attending",
      "attended"
    ],
    "answerIndex": 0,
    "explanationVi": "Cấu trúc \"make + tân ngữ + V nguyên mẫu (không to)\". \"Attend\" là đáp án đúng.",
    "sentenceVi": "Người giám sát bắt các nhân viên tham dự buổi đào tạo an toàn một lần nữa.",
    "vocabNotes": [
      {
        "word": "supervisor",
        "pos": "danh từ",
        "vi": "người giám sát"
      },
      {
        "word": "safety training",
        "pos": "cụm từ",
        "vi": "huấn luyện an toàn"
      }
    ]
  },
  {
    "id": "A2-bulk-027",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "causative",
      "have-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I had my passport ___ at the embassy last week.",
    "options": [
      "renewing",
      "renew",
      "renewed",
      "to renew"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Have + sth + V3/Ved\" (thể bị động sai khiến): nhờ ai đó làm gì cho vật. \"Renewed\" diễn đạt việc passport được gia hạn.",
    "sentenceVi": "Tuần trước tôi đã nhờ làm mới hộ chiếu tại đại sứ quán.",
    "vocabNotes": [
      {
        "word": "passport",
        "pos": "danh từ",
        "vi": "hộ chiếu"
      },
      {
        "word": "renew",
        "pos": "động từ",
        "vi": "gia hạn / làm mới"
      },
      {
        "word": "embassy",
        "pos": "danh từ",
        "vi": "đại sứ quán"
      }
    ]
  },
  {
    "id": "A2-bulk-028",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "subjunctive",
      "insist-that"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The director insisted that every report ___ proofread before submission.",
    "options": [
      "is",
      "was",
      "be",
      "to be"
    ],
    "answerIndex": 2,
    "explanationVi": "Sau \"insist that\" dùng dạng subjunctive: V nguyên mẫu (be). Áp dụng cho mọi chủ ngữ và mọi thì.",
    "sentenceVi": "Giám đốc khăng khăng yêu cầu mỗi báo cáo phải được hiệu đính trước khi nộp.",
    "vocabNotes": [
      {
        "word": "insist",
        "pos": "động từ",
        "vi": "khăng khăng"
      },
      {
        "word": "proofread",
        "pos": "động từ",
        "vi": "hiệu đính / kiểm lỗi"
      },
      {
        "word": "submission",
        "pos": "danh từ",
        "vi": "việc nộp"
      }
    ]
  },
  {
    "id": "A2-bulk-029",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "concession",
      "although"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ she had little experience, she was hired for the position.",
    "options": [
      "Despite",
      "Although",
      "Because",
      "However"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Although\" + mệnh đề (S+V) chỉ sự nhượng bộ. \"Despite\" theo sau là danh từ/V-ing, không phải mệnh đề.",
    "sentenceVi": "Dù có ít kinh nghiệm, cô ấy vẫn được tuyển vào vị trí đó.",
    "vocabNotes": [
      {
        "word": "experience",
        "pos": "danh từ",
        "vi": "kinh nghiệm"
      },
      {
        "word": "hire",
        "pos": "động từ",
        "vi": "tuyển dụng"
      }
    ]
  },
  {
    "id": "A2-bulk-030",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "linking-verb",
      "get"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The weather is getting ___ as winter approaches.",
    "options": [
      "cold",
      "coldly",
      "colder",
      "most cold"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Get\" là linking verb diễn tả sự thay đổi trạng thái. Với ý \"ngày càng\" dùng so sánh hơn \"colder\".",
    "sentenceVi": "Thời tiết đang trở nên lạnh hơn khi mùa đông đến gần.",
    "vocabNotes": [
      {
        "word": "approach",
        "pos": "động từ",
        "vi": "đến gần"
      }
    ]
  },
  {
    "id": "A2-bulk-031",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "causative",
      "get-someone-to-do"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You should get a professional ___ your laptop before traveling abroad.",
    "options": [
      "check",
      "to check",
      "checking",
      "checked"
    ],
    "answerIndex": 1,
    "explanationVi": "Cấu trúc \"get + sb + to V\" (khác với \"have + sb + V\"). \"Get a professional to check\" = nhờ chuyên gia kiểm tra.",
    "sentenceVi": "Bạn nên nhờ một chuyên gia kiểm tra laptop của bạn trước khi đi công tác nước ngoài.",
    "vocabNotes": [
      {
        "word": "professional",
        "pos": "danh từ",
        "vi": "chuyên gia"
      },
      {
        "word": "abroad",
        "pos": "trạng từ",
        "vi": "ở nước ngoài"
      }
    ]
  },
  {
    "id": "A2-bulk-032",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "present-perfect",
      "question"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you ever been to Tokyo for business?",
    "options": [
      "Did",
      "Have",
      "Are",
      "Was"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu nghi vấn hiện tại hoàn thành: Have/Has + chủ ngữ + V3. \"Been to\" diễn đạt đã từng đến đâu đó.",
    "sentenceVi": "Bạn đã bao giờ đi công tác Tokyo chưa?",
    "vocabNotes": [
      {
        "word": "ever",
        "pos": "trạng từ",
        "vi": "đã từng"
      }
    ]
  },
  {
    "id": "A2-bulk-033",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "linking-verb",
      "remain"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The CEO remained ___ despite the ongoing crisis in the company.",
    "options": [
      "calm",
      "calmly",
      "to be calm",
      "calming"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Remain\" là linking verb, theo sau là tính từ. \"Calm\" mô tả trạng thái bình tĩnh.",
    "sentenceVi": "Giám đốc điều hành vẫn giữ được bình tĩnh dù công ty đang trong khủng hoảng.",
    "vocabNotes": [
      {
        "word": "remain",
        "pos": "động từ",
        "vi": "vẫn / giữ"
      },
      {
        "word": "crisis",
        "pos": "danh từ",
        "vi": "khủng hoảng"
      }
    ]
  },
  {
    "id": "A2-bulk-034",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "contrast",
      "whereas"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The marketing department prefers digital ads, ___ the sales team focuses on traditional media.",
    "options": [
      "because",
      "whereas",
      "since",
      "until"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Whereas\" thể hiện sự đối lập giữa hai vế. Hai bộ phận có sự lựa chọn khác nhau.",
    "sentenceVi": "Bộ phận marketing chuộng quảng cáo số, trong khi đội sales tập trung vào truyền thông truyền thống.",
    "vocabNotes": [
      {
        "word": "prefer",
        "pos": "động từ",
        "vi": "thích hơn"
      },
      {
        "word": "traditional media",
        "pos": "cụm từ",
        "vi": "truyền thông truyền thống"
      }
    ]
  },
  {
    "id": "A2-bulk-035",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "imperative",
      "don't-forget"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ to bring your ID badge when visiting the headquarters.",
    "options": [
      "Don't",
      "Don't forget",
      "Forget",
      "Not forget"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Don't forget to V\" = đừng quên làm gì. Cấu trúc nhắc nhở thông dụng.",
    "sentenceVi": "Đừng quên mang theo thẻ ID khi đến trụ sở chính.",
    "vocabNotes": [
      {
        "word": "ID badge",
        "pos": "cụm từ",
        "vi": "thẻ nhân viên"
      },
      {
        "word": "headquarters",
        "pos": "danh từ",
        "vi": "trụ sở chính"
      }
    ]
  },
  {
    "id": "A2-bulk-036",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "subjunctive",
      "essential-that"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "It is essential that the project ___ within budget.",
    "options": [
      "completes",
      "completed",
      "be completed",
      "is being completed"
    ],
    "answerIndex": 2,
    "explanationVi": "Sau \"It is essential that\" dùng subjunctive: V nguyên mẫu. \"Be completed\" (bị động) áp dụng cho mọi ngôi và thì.",
    "sentenceVi": "Điều cốt yếu là dự án phải được hoàn thành trong ngân sách.",
    "vocabNotes": [
      {
        "word": "essential",
        "pos": "tính từ",
        "vi": "cần thiết / cốt yếu"
      },
      {
        "word": "within budget",
        "pos": "cụm từ",
        "vi": "trong ngân sách"
      }
    ]
  },
  {
    "id": "A2-bulk-037",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "inversion",
      "no-sooner"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ had the meeting started than the fire alarm went off.",
    "options": [
      "No sooner",
      "Hardly",
      "Scarcely",
      "Barely"
    ],
    "answerIndex": 0,
    "explanationVi": "Cấu trúc \"No sooner had S + V3 than ...\" = \"vừa mới ... thì\". Các phương án khác đi với \"when\", không phải \"than\".",
    "sentenceVi": "Cuộc họp vừa bắt đầu thì chuông báo cháy reo lên.",
    "vocabNotes": [
      {
        "word": "fire alarm",
        "pos": "cụm từ",
        "vi": "chuông báo cháy"
      },
      {
        "word": "go off",
        "pos": "cụm từ",
        "vi": "reo lên / phát nổ"
      }
    ]
  },
  {
    "id": "A2-bulk-038",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "relative-clause",
      "whichever"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The committee will choose ___ candidate has the strongest portfolio.",
    "options": [
      "whichever",
      "whatever",
      "however",
      "whoever"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Whichever\" + danh từ = bất kỳ ... nào trong một nhóm xác định (các ứng viên). \"Whoever\" không đi cùng danh từ phía sau.",
    "sentenceVi": "Hội đồng sẽ chọn bất kỳ ứng viên nào có hồ sơ năng lực mạnh nhất.",
    "vocabNotes": [
      {
        "word": "committee",
        "pos": "danh từ",
        "vi": "hội đồng"
      },
      {
        "word": "candidate",
        "pos": "danh từ",
        "vi": "ứng viên"
      },
      {
        "word": "portfolio",
        "pos": "danh từ",
        "vi": "hồ sơ năng lực"
      }
    ]
  },
  {
    "id": "A2-bulk-039",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "causative",
      "have-something-done"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The company had its servers ___ to prevent further data breaches.",
    "options": [
      "upgrade",
      "upgrading",
      "upgraded",
      "to upgrade"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Have + tân ngữ + V3\" (sai khiến bị động) = nhờ ai đó làm gì cho vật. \"Upgraded\" cho thấy server được nâng cấp bởi người khác.",
    "sentenceVi": "Công ty đã cho nâng cấp các máy chủ để ngăn chặn rò rỉ dữ liệu thêm.",
    "vocabNotes": [
      {
        "word": "server",
        "pos": "danh từ",
        "vi": "máy chủ"
      },
      {
        "word": "upgrade",
        "pos": "động từ",
        "vi": "nâng cấp"
      },
      {
        "word": "data breach",
        "pos": "cụm từ",
        "vi": "rò rỉ dữ liệu"
      }
    ]
  },
  {
    "id": "A2-bulk-040",
    "topicId": "A2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "phrasal-verb",
      "turn-into"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "With careful planning, the team turned the crisis ___ an opportunity for growth.",
    "options": [
      "in",
      "to",
      "into",
      "from"
    ],
    "answerIndex": 2,
    "explanationVi": "Cụm \"turn sth into sth\" = biến X thành Y, diễn tả sự chuyển hóa hoàn toàn.",
    "sentenceVi": "Với kế hoạch cẩn thận, nhóm đã biến cuộc khủng hoảng thành một cơ hội phát triển.",
    "vocabNotes": [
      {
        "word": "crisis",
        "pos": "danh từ",
        "vi": "khủng hoảng"
      },
      {
        "word": "opportunity",
        "pos": "danh từ",
        "vi": "cơ hội"
      },
      {
        "word": "growth",
        "pos": "danh từ",
        "vi": "sự tăng trưởng"
      }
    ]
  }
];
