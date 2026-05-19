import type { Question } from "@/types";

// Topic E2 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "E2-gen01",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional-type-1",
      "grammar"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu:",
    "sentence": "If the shipment ___ by tomorrow morning, we will notify the client immediately.",
    "options": [
      "arrives",
      "arrived",
      "will arrive",
      "is arriving"
    ],
    "answerIndex": 0,
    "explanationVi": "Câu điều kiện loại 1 diễn tả sự việc có thể xảy ra ở hiện tại hoặc tương lai, mệnh đề 'if' chia ở thì hiện tại đơn.",
    "sentenceVi": "Nếu lô hàng đến vào sáng mai, chúng tôi sẽ thông báo cho khách hàng ngay lập tức.",
    "vocabNotes": [
      {
        "word": "shipment",
        "pos": "danh từ",
        "vi": "lô hàng"
      },
      {
        "word": "arrives",
        "pos": "động từ",
        "vi": "đến"
      },
      {
        "word": "notify",
        "pos": "động từ",
        "vi": "thông báo"
      },
      {
        "word": "client",
        "pos": "danh từ",
        "vi": "khách hàng"
      },
      {
        "word": "immediately",
        "pos": "trạng từ",
        "vi": "ngay lập tức"
      }
    ]
  },
  {
    "id": "E2-gen02",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional-type-2",
      "grammar"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "If the company ___ more budget, it would invest in a new marketing campaign.",
    "options": [
      "has",
      "had",
      "would have",
      "had had"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu điều kiện loại 2 diễn tả giả định không có thật ở hiện tại, mệnh đề 'if' sử dụng thì quá khứ đơn.",
    "sentenceVi": "Nếu công ty có nhiều ngân sách hơn, họ sẽ đầu tư vào một chiến dịch tiếp thị mới.",
    "vocabNotes": [
      {
        "word": "company",
        "pos": "danh từ",
        "vi": "công ty"
      },
      {
        "word": "budget",
        "pos": "danh từ",
        "vi": "ngân sách"
      },
      {
        "word": "invest in",
        "pos": "cụm từ",
        "vi": "đầu tư vào"
      },
      {
        "word": "marketing campaign",
        "pos": "cụm từ",
        "vi": "chiến dịch tiếp thị"
      }
    ]
  },
  {
    "id": "E2-gen03",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional-type-3",
      "grammar"
    ],
    "prompt": "Điền dạng đúng của động từ trong ngoặc (dùng would):",
    "sentence": "If you had attended the meeting yesterday, you ___ (know) about the budget changes.",
    "explanationVi": "Câu điều kiện loại 3 diễn tả giả định không có thật trong quá khứ, mệnh đề chính có cấu trúc: would have + VPII.",
    "sentenceVi": "Nếu bạn đã tham dự cuộc họp hôm qua, bạn hẳn đã biết về những thay đổi ngân sách.",
    "vocabNotes": [
      {
        "word": "attended",
        "pos": "động từ",
        "vi": "tham dự"
      },
      {
        "word": "meeting",
        "pos": "danh từ",
        "vi": "cuộc họp"
      },
      {
        "word": "known",
        "pos": "động từ",
        "vi": "biết"
      },
      {
        "word": "budget changes",
        "pos": "cụm từ",
        "vi": "thay đổi ngân sách"
      }
    ],
    "options": [
      "would have known",
      "had known",
      "will know",
      "would know"
    ],
    "answerIndex": 0
  },
  {
    "id": "E2-gen04",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "wish-clause",
      "grammar"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "I wish I ___ more time to prepare for the presentation last week.",
    "options": [
      "have",
      "had",
      "had had",
      "would have"
    ],
    "answerIndex": 2,
    "explanationVi": "Để diễn tả một điều ước về một sự việc không có thật trong quá khứ (last week), ta dùng cấu trúc 'wish + quá khứ hoàn thành'.",
    "sentenceVi": "Tôi ước tôi đã có nhiều thời gian hơn để chuẩn bị cho bài thuyết trình tuần trước.",
    "vocabNotes": [
      {
        "word": "wish",
        "pos": "động từ",
        "vi": "ước"
      },
      {
        "word": "had had",
        "pos": "cụm từ",
        "vi": "đã có"
      },
      {
        "word": "prepare for",
        "pos": "cụm từ",
        "vi": "chuẩn bị cho"
      },
      {
        "word": "presentation",
        "pos": "danh từ",
        "vi": "bài thuyết trình"
      },
      {
        "word": "last week",
        "pos": "cụm từ",
        "vi": "tuần trước"
      }
    ]
  },
  {
    "id": "E2-gen05",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "inversion",
      "conditional-type-3"
    ],
    "prompt": "Chọn đáp án phù hợp nhất:",
    "sentence": "___ the manager known about the issue, he would have addressed it sooner.",
    "options": [
      "If",
      "Had",
      "Should",
      "Were"
    ],
    "answerIndex": 1,
    "explanationVi": "Đây là cấu trúc đảo ngữ của câu điều kiện loại 3: Had + S + VPII, thay thế cho 'If the manager had known'.",
    "sentenceVi": "Nếu người quản lý biết về vấn đề đó, ông ấy đã giải quyết nó sớm hơn.",
    "vocabNotes": [
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "người quản lý"
      },
      {
        "word": "known",
        "pos": "động từ",
        "vi": "biết"
      },
      {
        "word": "issue",
        "pos": "danh từ",
        "vi": "vấn đề"
      },
      {
        "word": "addressed",
        "pos": "động từ",
        "vi": "giải quyết"
      },
      {
        "word": "sooner",
        "pos": "trạng từ",
        "vi": "sớm hơn"
      }
    ]
  },
  {
    "id": "E2-gen06",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "mixed-conditional",
      "grammar"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "If he had taken the job offer last year, he ___ a manager now.",
    "options": [
      "will be",
      "would be",
      "would have been",
      "had been"
    ],
    "answerIndex": 1,
    "explanationVi": "Câu điều kiện hỗn hợp diễn tả giả định trái ngược quá khứ (loại 3) dẫn đến kết quả trái ngược hiện tại (loại 2).",
    "sentenceVi": "Nếu anh ấy đã nhận lời đề nghị công việc năm ngoái, bây giờ anh ấy đã là một quản lý.",
    "vocabNotes": [
      {
        "word": "taken",
        "pos": "động từ",
        "vi": "nhận"
      },
      {
        "word": "job offer",
        "pos": "cụm từ",
        "vi": "lời đề nghị công việc"
      },
      {
        "word": "last year",
        "pos": "cụm từ",
        "vi": "năm ngoái"
      },
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "quản lý"
      },
      {
        "word": "now",
        "pos": "trạng từ",
        "vi": "bây giờ"
      }
    ]
  },
  {
    "id": "E2-gen07",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "unless",
      "grammar"
    ],
    "prompt": "Chọn từ thích hợp:",
    "sentence": "We will not sign the contract ___ they agree to our terms.",
    "options": [
      "if",
      "unless",
      "providing",
      "as long as"
    ],
    "answerIndex": 1,
    "explanationVi": "'Unless' có nghĩa là 'trừ khi' (if not), phù hợp với ngữ cảnh phủ định của việc ký hợp đồng.",
    "sentenceVi": "Chúng tôi sẽ không ký hợp đồng trừ khi họ đồng ý với các điều khoản của chúng tôi.",
    "vocabNotes": [
      {
        "word": "sign",
        "pos": "động từ",
        "vi": "ký"
      },
      {
        "word": "contract",
        "pos": "danh từ",
        "vi": "hợp đồng"
      },
      {
        "word": "unless",
        "pos": "liên từ",
        "vi": "trừ khi"
      },
      {
        "word": "agree to",
        "pos": "cụm từ",
        "vi": "đồng ý với"
      },
      {
        "word": "terms",
        "pos": "danh từ",
        "vi": "điều khoản"
      }
    ]
  },
  {
    "id": "E2-gen08",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional-type-0",
      "grammar"
    ],
    "prompt": "Điền dạng đúng của động từ trong ngoặc:",
    "sentence": "If you press this red button, the machine ___ (start) automatically.",
    "explanationVi": "Câu điều kiện loại 0 diễn tả một sự thật hiển nhiên hoặc quy trình kỹ thuật, mệnh đề chính chia ở hiện tại đơn.",
    "sentenceVi": "Nếu bạn nhấn nút đỏ này, máy sẽ tự động khởi động.",
    "vocabNotes": [
      {
        "word": "press",
        "pos": "động từ",
        "vi": "nhấn"
      },
      {
        "word": "red",
        "pos": "tính từ",
        "vi": "đỏ"
      },
      {
        "word": "button",
        "pos": "danh từ",
        "vi": "nút"
      },
      {
        "word": "machine",
        "pos": "danh từ",
        "vi": "máy"
      },
      {
        "word": "starts",
        "pos": "động từ",
        "vi": "khởi động"
      },
      {
        "word": "automatically",
        "pos": "trạng từ",
        "vi": "tự động"
      }
    ],
    "options": [
      "would start",
      "starts",
      "will start",
      "start"
    ],
    "answerIndex": 1
  },
  {
    "id": "E2-gen09",
    "topicId": "E2",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "conditional-type-2",
      "advice"
    ],
    "prompt": "Sắp xếp các từ sau thành câu lời khuyên:",
    "tiles": [
      "If",
      "I",
      "were",
      "you,",
      "I",
      "would",
      "apply",
      "now"
    ],
    "answer": "If I were you, I would apply now",
    "explanationVi": "Cấu trúc 'If I were you' là cách dùng phổ biến của câu điều kiện loại 2 để đưa ra lời khuyên.",
    "sentenceVi": "Nếu tôi là bạn, tôi sẽ nộp đơn ngay bây giờ.",
    "vocabNotes": [
      {
        "word": "were",
        "pos": "động từ",
        "vi": "là"
      },
      {
        "word": "apply",
        "pos": "động từ",
        "vi": "nộp đơn"
      },
      {
        "word": "now",
        "pos": "trạng từ",
        "vi": "bây giờ"
      }
    ]
  },
  {
    "id": "E2-gen10",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "inversion",
      "conditional-type-1"
    ],
    "prompt": "Chọn đáp án phù hợp nhất cho văn phong trang trọng:",
    "sentence": "___ you require any further assistance, please do not hesitate to contact us.",
    "options": [
      "If",
      "Should",
      "Had",
      "Were"
    ],
    "answerIndex": 1,
    "explanationVi": "Đảo ngữ 'Should + S + V' dùng trong câu điều kiện loại 1 để tăng tính trang trọng trong thư từ giao dịch.",
    "sentenceVi": "Nếu bạn cần thêm bất kỳ sự hỗ trợ nào, xin đừng ngần ngại liên hệ với chúng tôi.",
    "vocabNotes": [
      {
        "word": "require",
        "pos": "động từ",
        "vi": "cần"
      },
      {
        "word": "further",
        "pos": "tính từ",
        "vi": "thêm"
      },
      {
        "word": "assistance",
        "pos": "danh từ",
        "vi": "hỗ trợ"
      },
      {
        "word": "hesitate",
        "pos": "động từ",
        "vi": "ngần ngại"
      },
      {
        "word": "contact",
        "pos": "động từ",
        "vi": "liên hệ"
      }
    ]
  },
  {
    "id": "E2-bulk-001",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-0"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If you heat water to 100°C, it ___.",
    "options": [
      "will boil",
      "boils",
      "boiled",
      "would boil"
    ],
    "answerIndex": 1,
    "explanationVi": "Điều kiện loại 0 (sự thật khoa học): If + hiện tại đơn, hiện tại đơn.",
    "sentenceVi": "Nếu bạn đun nước đến 100°C, nó sôi.",
    "vocabNotes": [
      {
        "word": "boil",
        "pos": "động từ",
        "vi": "sôi"
      }
    ]
  },
  {
    "id": "E2-bulk-002",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-1"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If it rains tomorrow, we ___ the meeting.",
    "options": [
      "postpone",
      "will postpone",
      "would postpone",
      "had postponed"
    ],
    "answerIndex": 1,
    "explanationVi": "Điều kiện loại 1: If + hiện tại đơn, will + V.",
    "sentenceVi": "Nếu mai mưa, chúng tôi sẽ hoãn cuộc họp.",
    "vocabNotes": [
      {
        "word": "postpone",
        "pos": "động từ",
        "vi": "hoãn"
      }
    ]
  },
  {
    "id": "E2-bulk-003",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-2"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If I had more time, I ___ a new language.",
    "options": [
      "learn",
      "learned",
      "would learn",
      "will learn"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện loại 2 (không có thật ở hiện tại): If + QK đơn, would + V.",
    "sentenceVi": "Nếu tôi có nhiều thời gian hơn, tôi sẽ học một ngôn ngữ mới.",
    "vocabNotes": [
      {
        "word": "language",
        "pos": "danh từ",
        "vi": "ngôn ngữ"
      }
    ]
  },
  {
    "id": "E2-bulk-004",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-3"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If she had studied harder, she ___ the exam.",
    "options": [
      "would pass",
      "passed",
      "would have passed",
      "had passed"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện loại 3 (không có thật ở quá khứ): If + had + V3, would have + V3.",
    "sentenceVi": "Nếu cô ấy đã học chăm hơn, cô ấy đã đậu kỳ thi rồi.",
    "vocabNotes": [
      {
        "word": "exam",
        "pos": "danh từ",
        "vi": "kỳ thi"
      }
    ]
  },
  {
    "id": "E2-bulk-005",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-1-modal-can"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If you finish the report by 5 PM, you ___ leave early.",
    "options": [
      "can",
      "could",
      "would",
      "had"
    ],
    "answerIndex": 0,
    "explanationVi": "Điều kiện loại 1 với modal khác will: \"can\" thay vì \"will\".",
    "sentenceVi": "Nếu bạn hoàn thành báo cáo trước 5 giờ, bạn có thể ra về sớm.",
    "vocabNotes": [
      {
        "word": "finish",
        "pos": "động từ",
        "vi": "hoàn thành"
      }
    ]
  },
  {
    "id": "E2-bulk-006",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "unless"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you hurry, you'll miss the bus.",
    "options": [
      "If",
      "Unless",
      "When",
      "Because"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Unless\" = nếu không. Nếu bạn không nhanh, sẽ lỡ xe buýt.",
    "sentenceVi": "Trừ khi bạn nhanh lên, bạn sẽ lỡ xe buýt.",
    "vocabNotes": [
      {
        "word": "hurry",
        "pos": "động từ",
        "vi": "nhanh lên"
      }
    ]
  },
  {
    "id": "E2-bulk-007",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "wish",
      "present"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I wish I ___ swim better.",
    "options": [
      "can",
      "could",
      "will",
      "would"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Wish + S + QK đơn/could V\" cho ước hiện tại không có thật. \"Could\" thay cho \"can\".",
    "sentenceVi": "Tôi ước gì tôi có thể bơi giỏi hơn.",
    "vocabNotes": [
      {
        "word": "swim",
        "pos": "động từ",
        "vi": "bơi"
      }
    ]
  },
  {
    "id": "E2-bulk-008",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-2-be"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If I ___ you, I would accept the job offer.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answerIndex": 2,
    "explanationVi": "Trong loại 2, \"be\" dùng \"were\" cho mọi ngôi (chuẩn) — \"was\" cũng chấp nhận trong văn nói.",
    "sentenceVi": "Nếu tôi là bạn, tôi sẽ nhận lời mời làm việc đó.",
    "vocabNotes": [
      {
        "word": "job offer",
        "pos": "cụm từ",
        "vi": "lời mời làm việc"
      }
    ]
  },
  {
    "id": "E2-bulk-009",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "type-1-imperative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If you see John, ___ him to call me.",
    "options": [
      "telling",
      "told",
      "tell",
      "tells"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện loại 1 với mệnh lệnh: If + hiện tại, V nguyên mẫu.",
    "sentenceVi": "Nếu bạn gặp John, hãy bảo anh ấy gọi cho tôi.",
    "vocabNotes": [
      {
        "word": "see",
        "pos": "động từ",
        "vi": "gặp"
      }
    ]
  },
  {
    "id": "E2-bulk-010",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "conditional",
      "provided"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You can borrow the book ___ you return it by Friday.",
    "options": [
      "unless",
      "provided",
      "because",
      "while"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Provided (that)\" = miễn là / với điều kiện. Tương tự \"as long as\".",
    "sentenceVi": "Bạn có thể mượn quyển sách với điều kiện bạn trả nó trước thứ Sáu.",
    "vocabNotes": [
      {
        "word": "borrow",
        "pos": "động từ",
        "vi": "mượn"
      }
    ]
  },
  {
    "id": "E2-bulk-011",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "type-2-modal-could"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If she spoke Spanish, she ___ work in our Madrid office.",
    "options": [
      "can",
      "could",
      "may",
      "might have"
    ],
    "answerIndex": 1,
    "explanationVi": "Điều kiện loại 2 với khả năng: \"could\" thay cho \"would be able to\".",
    "sentenceVi": "Nếu cô ấy nói tiếng Tây Ban Nha, cô ấy có thể làm việc ở văn phòng Madrid.",
    "vocabNotes": [
      {
        "word": "Spanish",
        "pos": "danh từ",
        "vi": "tiếng Tây Ban Nha"
      }
    ]
  },
  {
    "id": "E2-bulk-012",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "type-3-modal-might"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If we had advertised more, we ___ more sales.",
    "options": [
      "had had",
      "might have had",
      "would have",
      "may have"
    ],
    "answerIndex": 1,
    "explanationVi": "Điều kiện loại 3 với khả năng không chắc: \"might have + V3\".",
    "sentenceVi": "Nếu chúng ta đã quảng cáo nhiều hơn, có thể chúng ta đã có nhiều doanh số hơn.",
    "vocabNotes": [
      {
        "word": "advertise",
        "pos": "động từ",
        "vi": "quảng cáo"
      },
      {
        "word": "sales",
        "pos": "danh từ",
        "vi": "doanh số"
      }
    ]
  },
  {
    "id": "E2-bulk-013",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "mixed-past-present"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If I had taken that job, I ___ in New York now.",
    "options": [
      "live",
      "lived",
      "would live",
      "would have lived"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện hỗn hợp (quá khứ → hiện tại): If + had + V3, would + V (hiện tại).",
    "sentenceVi": "Nếu tôi đã nhận công việc đó, bây giờ tôi đang sống ở New York.",
    "vocabNotes": [
      {
        "word": "job",
        "pos": "danh từ",
        "vi": "công việc"
      }
    ]
  },
  {
    "id": "E2-bulk-014",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "mixed-present-past"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If she were more careful, she ___ that mistake yesterday.",
    "options": [
      "wouldn't make",
      "didn't make",
      "wouldn't have made",
      "hadn't made"
    ],
    "answerIndex": 2,
    "explanationVi": "Hỗn hợp (hiện tại → quá khứ): If + QK đơn (hiện tại không thật), would have + V3 (kết quả quá khứ).",
    "sentenceVi": "Nếu cô ấy cẩn thận hơn (nói chung), cô ấy đã không phạm sai lầm đó hôm qua.",
    "vocabNotes": [
      {
        "word": "careful",
        "pos": "tính từ",
        "vi": "cẩn thận"
      }
    ]
  },
  {
    "id": "E2-bulk-015",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "wish",
      "past"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I wish I ___ harder for the exam last year.",
    "options": [
      "studied",
      "had studied",
      "would study",
      "studies"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Wish + had + V3\" cho tiếc nuối về quá khứ.",
    "sentenceVi": "Tôi ước gì đã học chăm hơn cho kỳ thi năm ngoái.",
    "vocabNotes": [
      {
        "word": "hard",
        "pos": "trạng từ",
        "vi": "chăm chỉ"
      }
    ]
  },
  {
    "id": "E2-bulk-016",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "wish",
      "would"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I wish you ___ talking during the meeting.",
    "options": [
      "stop",
      "stopped",
      "would stop",
      "had stopped"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Wish + S + would + V\" cho thay đổi hành vi của người khác mà người nói thấy phiền.",
    "sentenceVi": "Tôi ước gì bạn ngừng nói chuyện trong cuộc họp.",
    "vocabNotes": [
      {
        "word": "talking",
        "pos": "danh từ",
        "vi": "việc nói chuyện"
      }
    ]
  },
  {
    "id": "E2-bulk-017",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "were-vs-was"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ I to know the answer, I would tell you.",
    "options": [
      "If",
      "Were",
      "Had",
      "Should"
    ],
    "answerIndex": 1,
    "explanationVi": "Đảo ngữ loại 2: Were + S + (to V), thay cho \"If S were\".",
    "sentenceVi": "Nếu tôi biết câu trả lời, tôi sẽ nói cho bạn.",
    "vocabNotes": [
      {
        "word": "answer",
        "pos": "danh từ",
        "vi": "câu trả lời"
      }
    ]
  },
  {
    "id": "E2-bulk-018",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "unless-equivalent"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We won't go to the park ___ the weather improves.",
    "options": [
      "if",
      "unless",
      "provided",
      "while"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Unless\" = nếu không. Tương đương \"if ... not\".",
    "sentenceVi": "Chúng ta sẽ không đi công viên trừ khi thời tiết cải thiện.",
    "vocabNotes": [
      {
        "word": "improve",
        "pos": "động từ",
        "vi": "cải thiện"
      }
    ]
  },
  {
    "id": "E2-bulk-019",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "in-case"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Take a jacket ___ it gets cold tonight.",
    "options": [
      "if",
      "in case",
      "unless",
      "provided"
    ],
    "answerIndex": 1,
    "explanationVi": "\"In case\" = phòng khi (đề phòng). Khác với \"if\" (điều kiện thực sự).",
    "sentenceVi": "Hãy mang áo khoác phòng khi tối nay trời lạnh.",
    "vocabNotes": [
      {
        "word": "jacket",
        "pos": "danh từ",
        "vi": "áo khoác"
      }
    ]
  },
  {
    "id": "E2-bulk-020",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "as-long-as"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You can stay here ___ you are quiet.",
    "options": [
      "as long as",
      "unless",
      "in case",
      "whether"
    ],
    "answerIndex": 0,
    "explanationVi": "\"As long as\" = miễn là / với điều kiện.",
    "sentenceVi": "Bạn có thể ở lại đây miễn là bạn giữ im lặng.",
    "vocabNotes": [
      {
        "word": "quiet",
        "pos": "tính từ",
        "vi": "im lặng"
      }
    ]
  },
  {
    "id": "E2-bulk-021",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "even-if"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ it rains, we will go on the picnic.",
    "options": [
      "If",
      "Even if",
      "Unless",
      "Provided"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Even if\" = dù cho. Điều kiện không ngăn được hành động.",
    "sentenceVi": "Dù trời có mưa, chúng tôi cũng sẽ đi picnic.",
    "vocabNotes": [
      {
        "word": "picnic",
        "pos": "danh từ",
        "vi": "picnic / dã ngoại"
      }
    ]
  },
  {
    "id": "E2-bulk-022",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "type-1-or-2-doubt"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If I won the lottery, I ___ a yacht.",
    "options": [
      "bought",
      "buy",
      "will buy",
      "would buy"
    ],
    "answerIndex": 3,
    "explanationVi": "Điều kiện loại 2 (giả định không có thật / khó xảy ra): If + QK đơn, would + V.",
    "sentenceVi": "Nếu tôi trúng số, tôi sẽ mua một chiếc du thuyền.",
    "vocabNotes": [
      {
        "word": "lottery",
        "pos": "danh từ",
        "vi": "xổ số"
      },
      {
        "word": "yacht",
        "pos": "danh từ",
        "vi": "du thuyền"
      }
    ]
  },
  {
    "id": "E2-bulk-023",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "type-1-likely"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If our team wins the project, we ___ a big bonus.",
    "options": [
      "got",
      "get",
      "will get",
      "would get"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện loại 1 (có khả năng cao xảy ra): If + hiện tại đơn, will + V.",
    "sentenceVi": "Nếu đội chúng tôi thắng dự án, chúng tôi sẽ nhận tiền thưởng lớn.",
    "vocabNotes": [
      {
        "word": "bonus",
        "pos": "danh từ",
        "vi": "tiền thưởng"
      }
    ]
  },
  {
    "id": "E2-bulk-024",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "inversion-had"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ I known about the meeting, I would have attended.",
    "options": [
      "If",
      "Had",
      "Were",
      "Should"
    ],
    "answerIndex": 1,
    "explanationVi": "Đảo ngữ loại 3: Had + S + V3, thay cho \"If S had V3\".",
    "sentenceVi": "Nếu tôi đã biết về cuộc họp, tôi đã tham dự.",
    "vocabNotes": [
      {
        "word": "attend",
        "pos": "động từ",
        "vi": "tham dự"
      }
    ]
  },
  {
    "id": "E2-bulk-025",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "inversion-should"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you need help, please don't hesitate to call.",
    "options": [
      "If",
      "Had",
      "Were",
      "Should"
    ],
    "answerIndex": 3,
    "explanationVi": "Đảo ngữ loại 1: Should + S + V (= If S should V), gợi ý tình huống có thể xảy ra.",
    "sentenceVi": "Nếu bạn cần giúp đỡ, đừng ngần ngại gọi điện.",
    "vocabNotes": [
      {
        "word": "hesitate",
        "pos": "động từ",
        "vi": "ngần ngại"
      }
    ]
  },
  {
    "id": "E2-bulk-026",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "wish-have"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I wish I ___ a car so I wouldn't have to take the bus.",
    "options": [
      "have",
      "had",
      "would have",
      "had had"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Wish + QK đơn\" cho ước về hiện tại (không có thật bây giờ).",
    "sentenceVi": "Tôi ước gì tôi có một chiếc xe để không phải đi xe buýt.",
    "vocabNotes": [
      {
        "word": "car",
        "pos": "danh từ",
        "vi": "xe hơi"
      }
    ]
  },
  {
    "id": "E2-bulk-027",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "if-only"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If only I ___ the warning sign earlier!",
    "options": [
      "see",
      "saw",
      "had seen",
      "would see"
    ],
    "answerIndex": 2,
    "explanationVi": "\"If only\" + QKHT cho tiếc nuối quá khứ (mạnh hơn \"wish\").",
    "sentenceVi": "Giá mà tôi đã thấy biển cảnh báo sớm hơn!",
    "vocabNotes": [
      {
        "word": "warning sign",
        "pos": "cụm từ",
        "vi": "biển cảnh báo"
      }
    ]
  },
  {
    "id": "E2-bulk-028",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "but-for"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "But for your help, I ___ the project on time.",
    "options": [
      "wouldn't have completed",
      "wouldn't complete",
      "didn't complete",
      "hadn't completed"
    ],
    "answerIndex": 0,
    "explanationVi": "\"But for + N\" = nếu không có (tương đương loại 3): would have + V3.",
    "sentenceVi": "Nếu không có sự giúp đỡ của bạn, tôi đã không hoàn thành dự án đúng hạn.",
    "vocabNotes": [
      {
        "word": "complete",
        "pos": "động từ",
        "vi": "hoàn thành"
      }
    ]
  },
  {
    "id": "E2-bulk-029",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "without-equivalent"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ his quick thinking, the accident would have been worse.",
    "options": [
      "If",
      "Without",
      "Unless",
      "Provided"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Without\" + N = nếu không có (tương tự \"but for\").",
    "sentenceVi": "Nếu không có sự suy nghĩ nhanh của anh ấy, vụ tai nạn đã tệ hơn.",
    "vocabNotes": [
      {
        "word": "accident",
        "pos": "danh từ",
        "vi": "tai nạn"
      }
    ]
  },
  {
    "id": "E2-bulk-030",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "suppose"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you got the offer, would you take it?",
    "options": [
      "If",
      "Suppose",
      "Provided",
      "Unless"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Suppose / Supposing\" + mệnh đề = giả sử (thay cho \"if\" trong câu giả định).",
    "sentenceVi": "Giả sử bạn nhận được lời mời, bạn có nhận không?",
    "vocabNotes": [
      {
        "word": "offer",
        "pos": "danh từ",
        "vi": "lời mời"
      }
    ]
  },
  {
    "id": "E2-bulk-031",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "whether-or-not"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you like it or not, the decision has been made.",
    "options": [
      "If",
      "Whether",
      "Unless",
      "Even"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Whether ... or not\" diễn tả 2 khả năng đều cho cùng kết quả.",
    "sentenceVi": "Dù bạn thích hay không, quyết định đã được đưa ra.",
    "vocabNotes": [
      {
        "word": "decision",
        "pos": "danh từ",
        "vi": "quyết định"
      }
    ]
  },
  {
    "id": "E2-bulk-032",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "when-vs-if"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ I finish work, I always go for a walk.",
    "options": [
      "If",
      "When",
      "Unless",
      "Even if"
    ],
    "answerIndex": 1,
    "explanationVi": "\"When\" cho việc lặp lại / thói quen (luôn xảy ra). \"If\" gợi ý có thể không.",
    "sentenceVi": "Khi tôi xong việc, tôi luôn đi bộ một vòng.",
    "vocabNotes": [
      {
        "word": "walk",
        "pos": "danh từ",
        "vi": "việc đi bộ"
      }
    ]
  },
  {
    "id": "E2-bulk-033",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "wish",
      "present-stative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I wish I ___ tall enough to reach that shelf.",
    "options": [
      "am",
      "was",
      "were",
      "be"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Wish + were\" cho mọi ngôi (chuẩn formal) khi ước hiện tại không có thật.",
    "sentenceVi": "Tôi ước gì tôi đủ cao để với tới cái giá đó.",
    "vocabNotes": [
      {
        "word": "reach",
        "pos": "động từ",
        "vi": "với tới"
      },
      {
        "word": "shelf",
        "pos": "danh từ",
        "vi": "giá / kệ"
      }
    ]
  },
  {
    "id": "E2-bulk-034",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "provided-that-formal"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The loan will be approved ___ that you submit all required documents.",
    "options": [
      "unless",
      "provided",
      "because",
      "whether"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Provided that\" = miễn là / với điều kiện. Trang trọng hơn \"as long as\".",
    "sentenceVi": "Khoản vay sẽ được phê duyệt với điều kiện bạn nộp tất cả tài liệu yêu cầu.",
    "vocabNotes": [
      {
        "word": "loan",
        "pos": "danh từ",
        "vi": "khoản vay"
      },
      {
        "word": "required",
        "pos": "tính từ",
        "vi": "được yêu cầu"
      }
    ]
  },
  {
    "id": "E2-bulk-035",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "otherwise"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You should hurry. ___, we will be late for the train.",
    "options": [
      "Otherwise",
      "Therefore",
      "Moreover",
      "Although"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Otherwise\" = nếu không (hậu quả). Diễn đạt điều kiện ngầm.",
    "sentenceVi": "Bạn nên nhanh lên. Nếu không, chúng ta sẽ trễ tàu.",
    "vocabNotes": [
      {
        "word": "otherwise",
        "pos": "trạng từ",
        "vi": "nếu không"
      }
    ]
  },
  {
    "id": "E2-bulk-036",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "type-1-going-to"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If they don't fix the issue, we ___ to find another supplier.",
    "options": [
      "have",
      "are going",
      "will need",
      "needed"
    ],
    "answerIndex": 2,
    "explanationVi": "Điều kiện loại 1: vế kết quả có thể dùng \"will + V\" hoặc \"will need to\".",
    "sentenceVi": "Nếu họ không khắc phục vấn đề, chúng tôi sẽ phải tìm nhà cung cấp khác.",
    "vocabNotes": [
      {
        "word": "supplier",
        "pos": "danh từ",
        "vi": "nhà cung cấp"
      }
    ]
  },
  {
    "id": "E2-bulk-037",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "type-2-doubtful"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If I ___ a million dollars, I would donate half to charity.",
    "options": [
      "have",
      "had",
      "would have",
      "had had"
    ],
    "answerIndex": 1,
    "explanationVi": "Loại 2: If + QK đơn (không có thật ở hiện tại), would + V.",
    "sentenceVi": "Nếu tôi có một triệu đô, tôi sẽ quyên góp một nửa cho từ thiện.",
    "vocabNotes": [
      {
        "word": "donate",
        "pos": "động từ",
        "vi": "quyên góp"
      },
      {
        "word": "charity",
        "pos": "danh từ",
        "vi": "từ thiện"
      }
    ]
  },
  {
    "id": "E2-bulk-038",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "type-3-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If the report had been submitted on time, it ___ approved.",
    "options": [
      "would be",
      "would have been",
      "had been",
      "will be"
    ],
    "answerIndex": 1,
    "explanationVi": "Loại 3 bị động: would have been + V3.",
    "sentenceVi": "Nếu báo cáo đã được nộp đúng hạn, nó đã được phê duyệt rồi.",
    "vocabNotes": [
      {
        "word": "submit",
        "pos": "động từ",
        "vi": "nộp"
      },
      {
        "word": "approve",
        "pos": "động từ",
        "vi": "phê duyệt"
      }
    ]
  },
  {
    "id": "E2-bulk-039",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "conditional",
      "unless-modal-must"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "You must wear a helmet ___ you want to be fined.",
    "options": [
      "if",
      "unless",
      "provided",
      "whether"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Unless\" = \"if not\" (nếu không). \"Unless you want to be fined\" = \"nếu bạn không muốn bị phạt\" → bạn phải đội mũ.",
    "sentenceVi": "Bạn phải đội mũ bảo hiểm trừ khi bạn muốn bị phạt.",
    "vocabNotes": [
      {
        "word": "helmet",
        "pos": "danh từ",
        "vi": "mũ bảo hiểm"
      },
      {
        "word": "fine",
        "pos": "động từ",
        "vi": "phạt tiền"
      }
    ]
  },
  {
    "id": "E2-bulk-040",
    "topicId": "E2",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "conditional",
      "mixed-type"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If she hadn't missed the bus this morning, she ___ already at work.",
    "options": [
      "would have been",
      "would be",
      "is",
      "had been"
    ],
    "answerIndex": 1,
    "explanationVi": "Hỗn hợp (quá khứ → hiện tại): If + had + V3 (quá khứ), would + V hiện tại.",
    "sentenceVi": "Nếu sáng nay cô ấy không lỡ xe buýt, giờ cô ấy đã ở chỗ làm rồi.",
    "vocabNotes": [
      {
        "word": "miss",
        "pos": "động từ",
        "vi": "lỡ"
      }
    ]
  }
];
