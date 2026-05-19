import type { Question } from "@/types";

// Topic D1 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "D1-gen01",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive-voice",
      "present-simple",
      "business"
    ],
    "prompt": "Chọn đáp án đúng nhất để hoàn thành câu sau:",
    "sentence": "The office floor ___ every evening by the maintenance staff.",
    "options": [
      "cleans",
      "is cleaned",
      "is cleaning",
      "clean"
    ],
    "answerIndex": 1,
    "explanationVi": "Chủ ngữ 'The office floor' là vật chịu tác động của hành động 'clean' nên phải dùng thể bị động (be + VPII) ở thì hiện tại đơn.",
    "sentenceVi": "Sàn văn phòng được nhân viên bảo trì dọn dẹp mỗi tối.",
    "vocabNotes": [
      {
        "word": "office floor",
        "pos": "danh từ",
        "vi": "sàn văn phòng"
      },
      {
        "word": "cleaned",
        "pos": "động từ",
        "vi": "được dọn dẹp"
      },
      {
        "word": "every evening",
        "pos": "cụm từ",
        "vi": "mỗi tối"
      },
      {
        "word": "maintenance staff",
        "pos": "danh từ",
        "vi": "nhân viên bảo trì"
      }
    ]
  },
  {
    "id": "D1-gen02",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive-voice",
      "modals",
      "safety"
    ],
    "prompt": "Điền một từ thích hợp vào chỗ trống:",
    "sentence": "All safety regulations must ___ strictly followed by every employee.",
    "explanationVi": "Sau động từ khuyết thiếu 'must' trong câu bị động, ta sử dụng 'be' nguyên mẫu kết hợp với VPII (followed).",
    "sentenceVi": "Tất cả các quy định an toàn phải được mọi nhân viên tuân thủ nghiêm ngặt.",
    "vocabNotes": [
      {
        "word": "safety regulations",
        "pos": "danh từ",
        "vi": "quy định an toàn"
      },
      {
        "word": "must be followed",
        "pos": "cụm từ",
        "vi": "phải được tuân thủ"
      },
      {
        "word": "strictly",
        "pos": "trạng từ",
        "vi": "nghiêm ngặt"
      },
      {
        "word": "employee",
        "pos": "danh từ",
        "vi": "nhân viên"
      }
    ],
    "options": [
      "do",
      "get",
      "have",
      "be"
    ],
    "answerIndex": 3
  },
  {
    "id": "D1-gen03",
    "topicId": "D1",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "passive-voice",
      "present-perfect",
      "business"
    ],
    "prompt": "Sắp xếp các từ sau thành một câu hoàn chỉnh:",
    "tiles": [
      "The",
      "meeting",
      "has",
      "been",
      "canceled",
      "due",
      "to",
      "rain"
    ],
    "answer": "The meeting has been canceled due to rain",
    "explanationVi": "Cấu trúc bị động ở thì hiện tại hoàn thành là S + has/have + been + VPII để diễn tả một sự việc vừa mới xảy ra.",
    "sentenceVi": "Cuộc họp đã bị hủy bỏ do trời mưa.",
    "vocabNotes": [
      {
        "word": "meeting",
        "pos": "danh từ",
        "vi": "cuộc họp"
      },
      {
        "word": "has been canceled",
        "pos": "cụm từ",
        "vi": "đã bị hủy"
      },
      {
        "word": "due to",
        "pos": "giới từ",
        "vi": "do, vì"
      },
      {
        "word": "rain",
        "pos": "danh từ",
        "vi": "mưa"
      }
    ]
  },
  {
    "id": "D1-gen04",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive-voice",
      "reporting-verbs",
      "advanced"
    ],
    "prompt": "Chọn đáp án phù hợp nhất:",
    "sentence": "The company ___ to have lost millions of dollars in the recent market crash.",
    "options": [
      "is reported",
      "reports",
      "reporting",
      "reported"
    ],
    "answerIndex": 0,
    "explanationVi": "Đây là cấu trúc câu bị động với động từ tường thuật (reporting verbs) dạng: S + be + VPII + to-infinitive.",
    "sentenceVi": "Công ty được báo cáo là đã mất hàng triệu đô la trong đợt sụp đổ thị trường gần đây.",
    "vocabNotes": [
      {
        "word": "company",
        "pos": "danh từ",
        "vi": "công ty"
      },
      {
        "word": "is reported",
        "pos": "động từ",
        "vi": "được báo cáo"
      },
      {
        "word": "lost",
        "pos": "động từ",
        "vi": "mất"
      },
      {
        "word": "millions of dollars",
        "pos": "cụm từ",
        "vi": "hàng triệu đô la"
      },
      {
        "word": "recent",
        "pos": "tính từ",
        "vi": "gần đây"
      },
      {
        "word": "market crash",
        "pos": "danh từ",
        "vi": "sụp đổ thị trường"
      }
    ]
  },
  {
    "id": "D1-gen05",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive-voice",
      "past-simple",
      "administrative"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "The important documents ___ to the manager's office yesterday.",
    "options": [
      "was delivered",
      "were delivered",
      "delivered",
      "delivering"
    ],
    "answerIndex": 1,
    "explanationVi": "Chủ ngữ 'documents' là số nhiều và hành động xảy ra trong quá khứ 'yesterday' nên ta dùng 'were + VPII'.",
    "sentenceVi": "Các tài liệu quan trọng đã được gửi đến văn phòng quản lý ngày hôm qua.",
    "vocabNotes": [
      {
        "word": "important",
        "pos": "tính từ",
        "vi": "quan trọng"
      },
      {
        "word": "documents",
        "pos": "danh từ",
        "vi": "tài liệu"
      },
      {
        "word": "were delivered",
        "pos": "cụm từ",
        "vi": "đã được gửi"
      },
      {
        "word": "manager's office",
        "pos": "danh từ",
        "vi": "văn phòng quản lý"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ]
  },
  {
    "id": "D1-gen06",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive-voice",
      "causative",
      "daily-life"
    ],
    "prompt": "Điền dạng đúng của động từ 'service' vào chỗ trống:",
    "sentence": "Ms. Lee needs to have her car ___ before the long road trip.",
    "explanationVi": "Cấu trúc 'have something done' (have + tân ngữ vật + VPII) được dùng khi một dịch vụ được thực hiện bởi người khác.",
    "sentenceVi": "Cô Lee cần bảo dưỡng xe trước chuyến đi đường dài.",
    "vocabNotes": [
      {
        "word": "needs to have",
        "pos": "cụm từ",
        "vi": "cần phải"
      },
      {
        "word": "serviced",
        "pos": "động từ",
        "vi": "bảo dưỡng"
      },
      {
        "word": "before",
        "pos": "giới từ",
        "vi": "trước khi"
      },
      {
        "word": "long",
        "pos": "tính từ",
        "vi": "dài"
      },
      {
        "word": "road trip",
        "pos": "danh từ",
        "vi": "chuyến đi đường dài"
      }
    ],
    "options": [
      "to service",
      "servicing",
      "serviced",
      "service"
    ],
    "answerIndex": 2
  },
  {
    "id": "D1-gen07",
    "topicId": "D1",
    "type": "wordOrder",
    "difficulty": 3,
    "tags": [
      "passive-voice",
      "gerund",
      "personal-feeling"
    ],
    "prompt": "Sắp xếp các từ thành câu đúng:",
    "tiles": [
      "He",
      "hates",
      "being",
      "kept",
      "waiting",
      "for",
      "too",
      "long"
    ],
    "answer": "He hates being kept waiting for too long",
    "explanationVi": "Sau động từ 'hate' có thể dùng 'being + VPII' để diễn tả việc chủ ngữ ghét bị đối xử hoặc bị tác động bởi một hành động nào đó.",
    "sentenceVi": "Anh ấy ghét bị bắt chờ đợi quá lâu.",
    "vocabNotes": [
      {
        "word": "hates",
        "pos": "động từ",
        "vi": "ghét"
      },
      {
        "word": "being kept waiting",
        "pos": "cụm từ",
        "vi": "bị bắt chờ đợi"
      },
      {
        "word": "too long",
        "pos": "cụm từ",
        "vi": "quá lâu"
      }
    ]
  },
  {
    "id": "D1-gen08",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive-voice",
      "present-continuous",
      "construction"
    ],
    "prompt": "Chọn đáp án đúng để hoàn thành câu:",
    "sentence": "Look! The main bridge is ___ repaired by a team of skilled engineers.",
    "options": [
      "be",
      "been",
      "being",
      "to be"
    ],
    "answerIndex": 2,
    "explanationVi": "Thì hiện tại tiếp diễn ở thể bị động có cấu trúc: am/is/are + being + VPII.",
    "sentenceVi": "Nhìn kìa! Cây cầu chính đang được một đội ngũ kỹ sư lành nghề sửa chữa.",
    "vocabNotes": [
      {
        "word": "Look!",
        "pos": "động từ",
        "vi": "Nhìn kìa!"
      },
      {
        "word": "main bridge",
        "pos": "danh từ",
        "vi": "cầu chính"
      },
      {
        "word": "is being repaired",
        "pos": "cụm từ",
        "vi": "đang được sửa"
      },
      {
        "word": "team of",
        "pos": "cụm từ",
        "vi": "đội ngũ"
      },
      {
        "word": "skilled",
        "pos": "tính từ",
        "vi": "lành nghề"
      },
      {
        "word": "engineers",
        "pos": "danh từ",
        "vi": "kỹ sư"
      }
    ]
  },
  {
    "id": "D1-gen09",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive-voice",
      "prepositions",
      "tools"
    ],
    "prompt": "Điền giới từ phù hợp vào chỗ trống:",
    "sentence": "The wooden door was smashed open ___ a heavy hammer.",
    "explanationVi": "Sử dụng giới từ 'with' để chỉ công cụ hoặc phương tiện được dùng để thực hiện hành động trong câu bị động.",
    "sentenceVi": "Cánh cửa gỗ đã bị đập tung bằng một chiếc búa nặng.",
    "vocabNotes": [
      {
        "word": "wooden",
        "pos": "tính từ",
        "vi": "bằng gỗ"
      },
      {
        "word": "door",
        "pos": "danh từ",
        "vi": "cửa"
      },
      {
        "word": "smashed open",
        "pos": "cụm từ",
        "vi": "đập tung"
      },
      {
        "word": "heavy",
        "pos": "tính từ",
        "vi": "nặng"
      },
      {
        "word": "hammer",
        "pos": "danh từ",
        "vi": "búa"
      }
    ],
    "options": [
      "from",
      "by",
      "of",
      "with"
    ],
    "answerIndex": 3
  },
  {
    "id": "D1-gen10",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive-voice",
      "future-perfect",
      "project-management"
    ],
    "prompt": "Chọn đáp án đúng nhất:",
    "sentence": "By the end of this month, the annual report will have ___ submitted to the board.",
    "options": [
      "be",
      "been",
      "being",
      "is"
    ],
    "answerIndex": 1,
    "explanationVi": "Cấu trúc bị động của thì tương lai hoàn thành là: will + have + been + VPII.",
    "sentenceVi": "Đến cuối tháng này, báo cáo thường niên sẽ được nộp cho ban giám đốc.",
    "vocabNotes": [
      {
        "word": "By the end of",
        "pos": "cụm từ",
        "vi": "Đến cuối"
      },
      {
        "word": "this month",
        "pos": "danh từ",
        "vi": "tháng này"
      },
      {
        "word": "annual report",
        "pos": "danh từ",
        "vi": "báo cáo thường niên"
      },
      {
        "word": "will have been submitted",
        "pos": "cụm từ",
        "vi": "sẽ được nộp"
      },
      {
        "word": "board",
        "pos": "danh từ",
        "vi": "ban giám đốc"
      }
    ]
  },
  {
    "id": "D1-bulk-001",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "present-simple"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "English ___ in most international meetings.",
    "options": [
      "speaks",
      "is spoken",
      "speak",
      "spoken"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động hiện tại đơn: is/are + V3. Tiếng Anh được nói (bị động).",
    "sentenceVi": "Tiếng Anh được sử dụng trong hầu hết các cuộc họp quốc tế.",
    "vocabNotes": [
      {
        "word": "international",
        "pos": "tính từ",
        "vi": "quốc tế"
      }
    ]
  },
  {
    "id": "D1-bulk-002",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "present-continuous"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new office building ___ constructed near the central station right now.",
    "options": [
      "is being",
      "is",
      "has been",
      "was"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động hiện tại tiếp diễn: is/are + being + V3. Có \"right now\" → tiếp diễn.",
    "sentenceVi": "Toà nhà văn phòng mới đang được xây dựng gần ga trung tâm ngay lúc này.",
    "vocabNotes": [
      {
        "word": "construct",
        "pos": "động từ",
        "vi": "xây dựng"
      }
    ]
  },
  {
    "id": "D1-bulk-003",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "past-simple"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The contract ___ signed by both parties last week.",
    "options": [
      "is",
      "was",
      "has been",
      "will be"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động quá khứ đơn: was/were + V3. Có \"last week\" → quá khứ.",
    "sentenceVi": "Hợp đồng đã được ký bởi cả hai bên tuần trước.",
    "vocabNotes": [
      {
        "word": "contract",
        "pos": "danh từ",
        "vi": "hợp đồng"
      },
      {
        "word": "parties",
        "pos": "danh từ",
        "vi": "các bên"
      }
    ]
  },
  {
    "id": "D1-bulk-004",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "past-continuous"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new policy ___ discussed when the CEO walked into the room.",
    "options": [
      "was being",
      "has been",
      "is",
      "was"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động quá khứ tiếp diễn: was/were + being + V3. Hành động đang diễn ra trong quá khứ.",
    "sentenceVi": "Chính sách mới đang được thảo luận khi CEO bước vào phòng.",
    "vocabNotes": [
      {
        "word": "policy",
        "pos": "danh từ",
        "vi": "chính sách"
      }
    ]
  },
  {
    "id": "D1-bulk-005",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "present-perfect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All necessary documents ___ already sent to the headquarters.",
    "options": [
      "have been",
      "are",
      "were",
      "had been"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động hiện tại hoàn thành: have/has + been + V3. \"Already\" gợi ý HTHT.",
    "sentenceVi": "Tất cả tài liệu cần thiết đã được gửi đến trụ sở chính rồi.",
    "vocabNotes": [
      {
        "word": "headquarters",
        "pos": "danh từ",
        "vi": "trụ sở chính"
      }
    ]
  },
  {
    "id": "D1-bulk-006",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "future-will"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The annual report ___ presented at the next shareholders' meeting.",
    "options": [
      "is",
      "was",
      "will be",
      "has been"
    ],
    "answerIndex": 2,
    "explanationVi": "Bị động tương lai đơn: will + be + V3.",
    "sentenceVi": "Báo cáo thường niên sẽ được trình bày tại cuộc họp cổ đông tiếp theo.",
    "vocabNotes": [
      {
        "word": "shareholder",
        "pos": "danh từ",
        "vi": "cổ đông"
      }
    ]
  },
  {
    "id": "D1-bulk-007",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "modal"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All employees must ___ trained in workplace safety procedures.",
    "options": [
      "be",
      "been",
      "being",
      "are"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động với modal: modal + be + V3.",
    "sentenceVi": "Tất cả nhân viên phải được đào tạo về các quy trình an toàn lao động.",
    "vocabNotes": [
      {
        "word": "safety procedure",
        "pos": "cụm từ",
        "vi": "quy trình an toàn"
      }
    ]
  },
  {
    "id": "D1-bulk-008",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "by-agent"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The award was given to her ___ the head of the institute.",
    "options": [
      "with",
      "by",
      "of",
      "from"
    ],
    "answerIndex": 1,
    "explanationVi": "\"By + tác nhân\" trong câu bị động chỉ ai/cái gì thực hiện hành động.",
    "sentenceVi": "Giải thưởng đã được trao cho cô ấy bởi giám đốc viện.",
    "vocabNotes": [
      {
        "word": "award",
        "pos": "danh từ",
        "vi": "giải thưởng"
      },
      {
        "word": "institute",
        "pos": "danh từ",
        "vi": "viện"
      }
    ]
  },
  {
    "id": "D1-bulk-009",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "by-instrument"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The package was opened ___ a sharp knife.",
    "options": [
      "by",
      "with",
      "of",
      "from"
    ],
    "answerIndex": 1,
    "explanationVi": "\"With + công cụ\" diễn đạt phương tiện thực hiện hành động (khác với \"by + người\").",
    "sentenceVi": "Bưu kiện đã được mở bằng một con dao sắc.",
    "vocabNotes": [
      {
        "word": "sharp",
        "pos": "tính từ",
        "vi": "sắc"
      }
    ]
  },
  {
    "id": "D1-bulk-010",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "object-of-prep"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new employee was warmly welcomed ___ everyone in the team.",
    "options": [
      "from",
      "by",
      "of",
      "in"
    ],
    "answerIndex": 1,
    "explanationVi": "\"By + người thực hiện hành động\" trong câu bị động.",
    "sentenceVi": "Nhân viên mới được mọi người trong đội chào đón nồng nhiệt.",
    "vocabNotes": [
      {
        "word": "warmly",
        "pos": "trạng từ",
        "vi": "nồng nhiệt"
      }
    ]
  },
  {
    "id": "D1-bulk-011",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "past-perfect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "By the time we arrived, all the tickets ___ already been sold.",
    "options": [
      "have",
      "had",
      "were",
      "are"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động quá khứ hoàn thành: had + been + V3. Có \"by the time we arrived\".",
    "sentenceVi": "Đến lúc chúng tôi tới nơi thì tất cả vé đã được bán hết rồi.",
    "vocabNotes": [
      {
        "word": "by the time",
        "pos": "cụm từ",
        "vi": "đến lúc"
      }
    ]
  },
  {
    "id": "D1-bulk-012",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "be-going-to"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new product line ___ launched in Q3 this year.",
    "options": [
      "is going to be",
      "is going to",
      "going to be",
      "go to be"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động với \"be going to\": be + going to + be + V3.",
    "sentenceVi": "Dòng sản phẩm mới sẽ được ra mắt trong quý 3 năm nay.",
    "vocabNotes": [
      {
        "word": "product line",
        "pos": "cụm từ",
        "vi": "dòng sản phẩm"
      },
      {
        "word": "launch",
        "pos": "động từ",
        "vi": "ra mắt"
      }
    ]
  },
  {
    "id": "D1-bulk-013",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "say-believe-think"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "It is ___ that the global economy will recover next year.",
    "options": [
      "believe",
      "believed",
      "believing",
      "to believe"
    ],
    "answerIndex": 1,
    "explanationVi": "Cấu trúc bị động không ngôi: \"It is + V3 + that\" với các verb như say, believe, think, report.",
    "sentenceVi": "Người ta tin rằng nền kinh tế toàn cầu sẽ phục hồi vào năm tới.",
    "vocabNotes": [
      {
        "word": "recover",
        "pos": "động từ",
        "vi": "phục hồi"
      },
      {
        "word": "global economy",
        "pos": "cụm từ",
        "vi": "kinh tế toàn cầu"
      }
    ]
  },
  {
    "id": "D1-bulk-014",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "say-be-said-to"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She is said ___ over 30 books in her lifetime.",
    "options": [
      "write",
      "to write",
      "to have written",
      "having written"
    ],
    "answerIndex": 2,
    "explanationVi": "\"S + be said + to have V3\" khi hành động xảy ra TRƯỚC thời điểm \"is said\".",
    "sentenceVi": "Người ta nói cô ấy đã viết hơn 30 cuốn sách trong cuộc đời mình.",
    "vocabNotes": [
      {
        "word": "lifetime",
        "pos": "danh từ",
        "vi": "cuộc đời"
      }
    ]
  },
  {
    "id": "D1-bulk-015",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "v-ing-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Nobody enjoys ___ at in public.",
    "options": [
      "laugh",
      "laughing",
      "to be laughed",
      "being laughed"
    ],
    "answerIndex": 3,
    "explanationVi": "Dạng V-ing bị động: being + V3. Sau \"enjoy\" dùng V-ing.",
    "sentenceVi": "Không ai thích bị cười nhạo nơi công cộng.",
    "vocabNotes": [
      {
        "word": "laugh at",
        "pos": "cụm từ",
        "vi": "cười nhạo"
      },
      {
        "word": "in public",
        "pos": "cụm từ",
        "vi": "nơi công cộng"
      }
    ]
  },
  {
    "id": "D1-bulk-016",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "to-v-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She expected ___ for the promotion this year.",
    "options": [
      "consider",
      "considering",
      "to consider",
      "to be considered"
    ],
    "answerIndex": 3,
    "explanationVi": "Dạng \"to V\" bị động: to be + V3.",
    "sentenceVi": "Cô ấy mong được xem xét thăng chức năm nay.",
    "vocabNotes": [
      {
        "word": "promotion",
        "pos": "danh từ",
        "vi": "sự thăng chức"
      }
    ]
  },
  {
    "id": "D1-bulk-017",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "verb-with-two-objects"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "She was given a generous bonus ___ her exceptional work.",
    "options": [
      "by",
      "for",
      "of",
      "from"
    ],
    "answerIndex": 1,
    "explanationVi": "\"For + lý do\". Với động từ \"give\" bị động, \"to + người\" hoặc bỏ. Lý do thì dùng \"for\".",
    "sentenceVi": "Cô ấy được thưởng hậu hĩnh vì công việc xuất sắc của mình.",
    "vocabNotes": [
      {
        "word": "generous",
        "pos": "tính từ",
        "vi": "hậu hĩnh / hào phóng"
      },
      {
        "word": "exceptional",
        "pos": "tính từ",
        "vi": "xuất sắc"
      }
    ]
  },
  {
    "id": "D1-bulk-018",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "future-perfect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "By the end of December, the project ___ completed.",
    "options": [
      "will have been",
      "will be",
      "has been",
      "would have"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động tương lai hoàn thành: will + have + been + V3. \"By the end of\" gợi ý TLHT.",
    "sentenceVi": "Đến cuối tháng 12, dự án sẽ đã được hoàn thành.",
    "vocabNotes": [
      {
        "word": "by the end of",
        "pos": "cụm từ",
        "vi": "đến cuối"
      }
    ]
  },
  {
    "id": "D1-bulk-019",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "get-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "His proposal ___ approved by the board after several revisions.",
    "options": [
      "got",
      "get",
      "getting",
      "to get"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Get + V3\" là dạng bị động không trang trọng, phổ biến trong văn nói. \"Got approved\" = được phê duyệt.",
    "sentenceVi": "Đề xuất của anh ấy đã được hội đồng phê duyệt sau vài lần chỉnh sửa.",
    "vocabNotes": [
      {
        "word": "approve",
        "pos": "động từ",
        "vi": "phê duyệt"
      },
      {
        "word": "revision",
        "pos": "danh từ",
        "vi": "sự chỉnh sửa"
      }
    ]
  },
  {
    "id": "D1-bulk-020",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "modal-have-been"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The error in the calculation must ___ overlooked during the review.",
    "options": [
      "be",
      "have been",
      "had been",
      "have"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Must have been + V3\" diễn đạt suy đoán chắc chắn về quá khứ (ở dạng bị động).",
    "sentenceVi": "Lỗi trong phép tính chắc hẳn đã bị bỏ sót trong quá trình rà soát.",
    "vocabNotes": [
      {
        "word": "calculation",
        "pos": "danh từ",
        "vi": "phép tính"
      },
      {
        "word": "overlook",
        "pos": "động từ",
        "vi": "bỏ sót"
      }
    ]
  },
  {
    "id": "D1-bulk-021",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "ditransitive-active-to-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The new intern was ___ a comprehensive orientation on her first day.",
    "options": [
      "gave",
      "given",
      "give",
      "giving"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động của \"give\" với 2 tân ngữ: chủ ngữ là người nhận, \"was given + sth\".",
    "sentenceVi": "Thực tập sinh mới đã được tham dự buổi định hướng toàn diện vào ngày đầu tiên.",
    "vocabNotes": [
      {
        "word": "orientation",
        "pos": "danh từ",
        "vi": "buổi định hướng"
      },
      {
        "word": "comprehensive",
        "pos": "tính từ",
        "vi": "toàn diện"
      }
    ]
  },
  {
    "id": "D1-bulk-022",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "agent-omission"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My wallet ___ stolen at the bus stop yesterday.",
    "options": [
      "was",
      "is",
      "has been",
      "had been"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động quá khứ đơn: was/were + V3. Khi không biết ai làm hoặc không cần nói, bỏ \"by\".",
    "sentenceVi": "Ví của tôi đã bị trộm tại bến xe buýt hôm qua.",
    "vocabNotes": [
      {
        "word": "wallet",
        "pos": "danh từ",
        "vi": "ví tiền"
      },
      {
        "word": "steal",
        "pos": "động từ",
        "vi": "trộm cắp"
      }
    ]
  },
  {
    "id": "D1-bulk-023",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "with-state-verb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The car is covered ___ a thick layer of dust after the trip.",
    "options": [
      "by",
      "with",
      "in",
      "from"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Covered with\" = phủ bởi (dạng tĩnh, mô tả trạng thái). Khác với \"covered by\" có thể chỉ tác nhân.",
    "sentenceVi": "Chiếc xe được phủ một lớp bụi dày sau chuyến đi.",
    "vocabNotes": [
      {
        "word": "layer",
        "pos": "danh từ",
        "vi": "lớp"
      },
      {
        "word": "dust",
        "pos": "danh từ",
        "vi": "bụi"
      }
    ]
  },
  {
    "id": "D1-bulk-024",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "interested-known-pleased-in"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Many investors are interested ___ the new tech startup.",
    "options": [
      "by",
      "for",
      "with",
      "in"
    ],
    "answerIndex": 3,
    "explanationVi": "Một số V3 ở dạng tính từ đi với giới từ riêng: interested in, known for, pleased with, etc.",
    "sentenceVi": "Nhiều nhà đầu tư quan tâm đến công ty khởi nghiệp công nghệ mới.",
    "vocabNotes": [
      {
        "word": "investor",
        "pos": "danh từ",
        "vi": "nhà đầu tư"
      },
      {
        "word": "startup",
        "pos": "danh từ",
        "vi": "công ty khởi nghiệp"
      }
    ]
  },
  {
    "id": "D1-bulk-025",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "make-causative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The interns were made ___ the entire training manual before starting work.",
    "options": [
      "read",
      "to read",
      "reading",
      "have read"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động của \"make + sb + V\" thành \"be made + to V\" (có thêm \"to\").",
    "sentenceVi": "Các thực tập sinh đã bị bắt đọc toàn bộ cẩm nang đào tạo trước khi bắt đầu công việc.",
    "vocabNotes": [
      {
        "word": "intern",
        "pos": "danh từ",
        "vi": "thực tập sinh"
      },
      {
        "word": "training manual",
        "pos": "cụm từ",
        "vi": "cẩm nang đào tạo"
      }
    ]
  },
  {
    "id": "D1-bulk-026",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "see-causative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The thief was seen ___ the building through the back door.",
    "options": [
      "enter",
      "to enter",
      "entering",
      "entered"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động của \"see + sb + V\" → \"be seen + to V\". (Nếu thấy đang xảy ra → \"be seen + V-ing\".)",
    "sentenceVi": "Tên trộm đã bị nhìn thấy đi vào toà nhà qua cửa sau.",
    "vocabNotes": [
      {
        "word": "thief",
        "pos": "danh từ",
        "vi": "tên trộm"
      },
      {
        "word": "back door",
        "pos": "cụm từ",
        "vi": "cửa sau"
      }
    ]
  },
  {
    "id": "D1-bulk-027",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "verb-with-prep"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The matter is being looked ___ by the senior management team.",
    "options": [
      "at",
      "into",
      "for",
      "after"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Look into\" = điều tra/xem xét → bị động giữ nguyên giới từ \"into\".",
    "sentenceVi": "Vấn đề đang được đội ngũ quản lý cấp cao xem xét.",
    "vocabNotes": [
      {
        "word": "look into",
        "pos": "cụm từ",
        "vi": "xem xét / điều tra"
      },
      {
        "word": "senior management",
        "pos": "cụm từ",
        "vi": "quản lý cấp cao"
      }
    ]
  },
  {
    "id": "D1-bulk-028",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "have-something-done"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I need to have my computer ___ before the trip next week.",
    "options": [
      "repair",
      "repairing",
      "repaired",
      "to repair"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Have + sth + V3\" (sai khiến bị động) = nhờ ai đó làm gì.",
    "sentenceVi": "Tôi cần phải nhờ sửa máy tính trước chuyến đi tuần tới.",
    "vocabNotes": [
      {
        "word": "repair",
        "pos": "động từ",
        "vi": "sửa chữa"
      }
    ]
  },
  {
    "id": "D1-bulk-029",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "say-reported"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The CEO ___ to be considering resignation amid the recent controversy.",
    "options": [
      "reports",
      "is reported",
      "reporting",
      "has reported"
    ],
    "answerIndex": 1,
    "explanationVi": "Cấu trúc \"S + be reported/said/believed + to V\" (bị động không ngôi). Hành động hiện tại → to V.",
    "sentenceVi": "CEO được báo cáo là đang cân nhắc từ chức giữa bối cảnh tranh cãi gần đây.",
    "vocabNotes": [
      {
        "word": "resignation",
        "pos": "danh từ",
        "vi": "sự từ chức"
      },
      {
        "word": "controversy",
        "pos": "danh từ",
        "vi": "sự tranh cãi"
      }
    ]
  },
  {
    "id": "D1-bulk-030",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "future-progressive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The construction noise ___ throughout the weekend, residents have been warned.",
    "options": [
      "will hear",
      "will be heard",
      "will have heard",
      "would hear"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động tương lai đơn: will + be + V3. Tiếng ồn sẽ được nghe (bị động).",
    "sentenceVi": "Tiếng ồn xây dựng sẽ vang lên suốt cuối tuần, cư dân đã được cảnh báo.",
    "vocabNotes": [
      {
        "word": "construction",
        "pos": "danh từ",
        "vi": "xây dựng"
      },
      {
        "word": "resident",
        "pos": "danh từ",
        "vi": "cư dân"
      }
    ]
  },
  {
    "id": "D1-bulk-031",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "infinitive-after-adj"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He is happy ___ for the leadership position.",
    "options": [
      "choose",
      "chose",
      "to be chosen",
      "choosing"
    ],
    "answerIndex": 2,
    "explanationVi": "Sau tính từ thường có cấu trúc \"adj + to V\". Bị động: \"to be + V3\".",
    "sentenceVi": "Anh ấy rất vui khi được chọn vào vị trí lãnh đạo.",
    "vocabNotes": [
      {
        "word": "leadership",
        "pos": "danh từ",
        "vi": "lãnh đạo"
      }
    ]
  },
  {
    "id": "D1-bulk-032",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "modal-past"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This problem should ___ days ago, before it became critical.",
    "options": [
      "address",
      "have addressed",
      "have been addressed",
      "be addressed"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Should have been + V3\" diễn đạt việc đáng lẽ phải được làm trong quá khứ (nhưng không làm).",
    "sentenceVi": "Vấn đề này lẽ ra phải được giải quyết từ vài ngày trước, trước khi nó trở nên nghiêm trọng.",
    "vocabNotes": [
      {
        "word": "address",
        "pos": "động từ",
        "vi": "giải quyết"
      },
      {
        "word": "critical",
        "pos": "tính từ",
        "vi": "nghiêm trọng / nguy kịch"
      }
    ]
  },
  {
    "id": "D1-bulk-033",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "make-from-made-of"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Paper is mostly made ___ wood pulp, although some types use recycled fibers.",
    "options": [
      "of",
      "by",
      "from",
      "with"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Made from\" khi vật liệu đã biến đổi không nhận ra (gỗ → giấy). \"Made of\" khi nhận ra vật liệu (cup of glass).",
    "sentenceVi": "Giấy chủ yếu được làm từ bột gỗ, dù một số loại dùng sợi tái chế.",
    "vocabNotes": [
      {
        "word": "wood pulp",
        "pos": "cụm từ",
        "vi": "bột gỗ"
      },
      {
        "word": "fiber",
        "pos": "danh từ",
        "vi": "sợi"
      }
    ]
  },
  {
    "id": "D1-bulk-034",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "passive-with-imperative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Let the agenda ___ to all attendees before the meeting starts.",
    "options": [
      "distribute",
      "distributing",
      "be distributed",
      "distributed"
    ],
    "answerIndex": 2,
    "explanationVi": "Mệnh lệnh bị động với \"let\": \"Let + sth + be + V3\".",
    "sentenceVi": "Hãy cho phép chương trình họp được phát đến tất cả người tham dự trước khi cuộc họp bắt đầu.",
    "vocabNotes": [
      {
        "word": "agenda",
        "pos": "danh từ",
        "vi": "chương trình họp"
      },
      {
        "word": "distribute",
        "pos": "động từ",
        "vi": "phân phát"
      }
    ]
  },
  {
    "id": "D1-bulk-035",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "reflexive-vs-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The classroom ___ thoroughly cleaned every day by the maintenance staff.",
    "options": [
      "is",
      "has",
      "was",
      "had"
    ],
    "answerIndex": 0,
    "explanationVi": "Bị động hiện tại đơn (lặp lại hàng ngày): is/are + V3.",
    "sentenceVi": "Phòng học được lau dọn kỹ càng mỗi ngày bởi nhân viên bảo dưỡng.",
    "vocabNotes": [
      {
        "word": "thoroughly",
        "pos": "trạng từ",
        "vi": "kỹ càng"
      },
      {
        "word": "maintenance staff",
        "pos": "cụm từ",
        "vi": "nhân viên bảo trì"
      }
    ]
  },
  {
    "id": "D1-bulk-036",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "ditransitive-tell"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All new hires are ___ about the company's history during orientation.",
    "options": [
      "told",
      "telling",
      "tell",
      "tells"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Tell\" bị động: be + told + about/that.",
    "sentenceVi": "Tất cả nhân viên mới được kể về lịch sử công ty trong buổi định hướng.",
    "vocabNotes": [
      {
        "word": "new hire",
        "pos": "cụm từ",
        "vi": "nhân viên mới"
      },
      {
        "word": "orientation",
        "pos": "danh từ",
        "vi": "buổi định hướng"
      }
    ]
  },
  {
    "id": "D1-bulk-037",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "passive",
      "verb-ask-passive"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Passengers are ___ to remain seated until the seatbelt sign turns off.",
    "options": [
      "ask",
      "asked",
      "asking",
      "to ask"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Ask + sb + to V\" bị động: \"be asked + to V\". Có \"to remain\" ngay sau ô trống.",
    "sentenceVi": "Hành khách được yêu cầu ngồi tại chỗ cho đến khi đèn báo thắt dây an toàn tắt.",
    "vocabNotes": [
      {
        "word": "seatbelt",
        "pos": "danh từ",
        "vi": "dây an toàn"
      },
      {
        "word": "remain seated",
        "pos": "cụm từ",
        "vi": "ngồi yên"
      }
    ]
  },
  {
    "id": "D1-bulk-038",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "passive-with-modal-perfect"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The system update could not ___ during peak business hours.",
    "options": [
      "install",
      "be installed",
      "have installed",
      "be installing"
    ],
    "answerIndex": 1,
    "explanationVi": "Bị động với modal: modal + be + V3. \"Could not be installed\" = không thể được cài đặt.",
    "sentenceVi": "Bản cập nhật hệ thống không thể được cài đặt trong giờ làm việc cao điểm.",
    "vocabNotes": [
      {
        "word": "update",
        "pos": "danh từ",
        "vi": "bản cập nhật"
      },
      {
        "word": "peak hours",
        "pos": "cụm từ",
        "vi": "giờ cao điểm"
      }
    ]
  },
  {
    "id": "D1-bulk-039",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "passive",
      "passive-after-modal-may-have"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The documents may ___ in the recent cyber attack.",
    "options": [
      "compromise",
      "have compromised",
      "have been compromised",
      "be compromise"
    ],
    "answerIndex": 2,
    "explanationVi": "\"May have been + V3\" diễn đạt suy đoán không chắc chắn về sự việc đã có thể xảy ra trong quá khứ (bị động).",
    "sentenceVi": "Các tài liệu có thể đã bị xâm phạm trong vụ tấn công mạng gần đây.",
    "vocabNotes": [
      {
        "word": "compromise",
        "pos": "động từ",
        "vi": "làm tổn hại / xâm phạm"
      },
      {
        "word": "cyber attack",
        "pos": "cụm từ",
        "vi": "tấn công mạng"
      }
    ]
  },
  {
    "id": "D1-bulk-040",
    "topicId": "D1",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "passive",
      "by-author"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The bestselling novel was written ___ a young Vietnamese author.",
    "options": [
      "from",
      "with",
      "by",
      "of"
    ],
    "answerIndex": 2,
    "explanationVi": "\"By + người thực hiện\" trong câu bị động.",
    "sentenceVi": "Cuốn tiểu thuyết bán chạy nhất được viết bởi một tác giả trẻ người Việt.",
    "vocabNotes": [
      {
        "word": "bestselling",
        "pos": "tính từ",
        "vi": "bán chạy nhất"
      },
      {
        "word": "author",
        "pos": "danh từ",
        "vi": "tác giả"
      }
    ]
  }
];
