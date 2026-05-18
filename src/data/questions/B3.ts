import type { Question } from "@/types";

// Topic B3 — question bank. Mix of hand-curated + auto-generated.
export const questions: Question[] = [
  {
    "id": "B3-gen01",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "personal-pronoun",
      "object-pronoun"
    ],
    "prompt": "Chọn đại từ phù hợp để điền vào chỗ trống:",
    "sentence": "Ms. Lee requested that the documents be sent to ___ immediately.",
    "options": [
      "she",
      "her",
      "hers",
      "herself"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ 'to' ta cần một đại từ tân ngữ (object pronoun). 'Her' là tân ngữ thay thế cho Ms. Lee.",
    "sentenceVi": "Cô Lee yêu cầu các tài liệu được gửi cho cô ấy ngay lập tức.",
    "vocabNotes": [
      {
        "word": "requested",
        "pos": "động từ",
        "vi": "yêu cầu"
      },
      {
        "word": "documents",
        "pos": "danh từ",
        "vi": "tài liệu"
      },
      {
        "word": "sent",
        "pos": "động từ",
        "vi": "gửi"
      },
      {
        "word": "immediately",
        "pos": "trạng từ",
        "vi": "ngay lập tức"
      }
    ]
  },
  {
    "id": "B3-gen02",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "possessive-pronoun"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "Our marketing strategy is effective, but ___ focuses more on social media engagement.",
    "options": [
      "their",
      "theirs",
      "them",
      "they"
    ],
    "answerIndex": 1,
    "explanationVi": "Dùng đại từ sở hữu 'theirs' để thay thế cho cụm 'their marketing strategy', đóng vai trò làm chủ ngữ cho vế sau.",
    "sentenceVi": "Chiến lược tiếp thị của chúng tôi hiệu quả, nhưng của họ tập trung nhiều hơn vào tương tác trên mạng xã hội.",
    "vocabNotes": [
      {
        "word": "marketing strategy",
        "pos": "cụm từ",
        "vi": "chiến lược tiếp thị"
      },
      {
        "word": "effective",
        "pos": "tính từ",
        "vi": "hiệu quả"
      },
      {
        "word": "theirs",
        "pos": "đại từ",
        "vi": "của họ"
      },
      {
        "word": "focuses on",
        "pos": "cụm từ",
        "vi": "tập trung vào"
      },
      {
        "word": "social media",
        "pos": "cụm từ",
        "vi": "mạng xã hội"
      },
      {
        "word": "engagement",
        "pos": "danh từ",
        "vi": "tương tác"
      }
    ]
  },
  {
    "id": "B3-gen03",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "reflexive-pronoun"
    ],
    "prompt": "Điền đại từ phản thân thích hợp:",
    "sentence": "Mr. Tanaka prepared the entire presentation by ___.",
    "explanationVi": "Cụm 'by himself' có nghĩa là tự mình làm hoặc làm một mình, phù hợp với chủ ngữ số ít giống đực 'Mr. Tanaka'.",
    "sentenceVi": "Ông Tanaka đã tự mình chuẩn bị toàn bộ bài thuyết trình.",
    "vocabNotes": [
      {
        "word": "prepared",
        "pos": "động từ",
        "vi": "chuẩn bị"
      },
      {
        "word": "entire",
        "pos": "tính từ",
        "vi": "toàn bộ"
      },
      {
        "word": "presentation",
        "pos": "danh từ",
        "vi": "bài thuyết trình"
      },
      {
        "word": "by himself",
        "pos": "cụm từ",
        "vi": "tự mình"
      }
    ],
    "options": [
      "himself",
      "herself",
      "themselves",
      "ourselves"
    ],
    "answerIndex": 0
  },
  {
    "id": "B3-gen04",
    "topicId": "B3",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "demonstrative-pronoun"
    ],
    "prompt": "Sắp xếp các từ thành câu hoàn chỉnh:",
    "tiles": [
      "Those",
      "who",
      "arrive",
      "late",
      "will",
      "miss",
      "the",
      "introduction"
    ],
    "answer": "Those who arrive late will miss the introduction",
    "explanationVi": "Cụm 'Those who' được dùng để chỉ một nhóm người (những người mà...), thường xuất hiện trong các thông báo.",
    "sentenceVi": "Những người đến muộn sẽ bỏ lỡ phần giới thiệu.",
    "vocabNotes": [
      {
        "word": "arrive",
        "pos": "động từ",
        "vi": "đến"
      },
      {
        "word": "late",
        "pos": "trạng từ",
        "vi": "muộn"
      },
      {
        "word": "miss",
        "pos": "động từ",
        "vi": "bỏ lỡ"
      },
      {
        "word": "introduction",
        "pos": "danh từ",
        "vi": "phần giới thiệu"
      }
    ]
  },
  {
    "id": "B3-gen05",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun"
    ],
    "prompt": "Chọn từ phù hợp nhất:",
    "sentence": "Please let us know if ___ of these laptops are malfunctioning.",
    "options": [
      "any",
      "every",
      "another",
      "each"
    ],
    "answerIndex": 0,
    "explanationVi": "'Any of' đi với danh từ số nhiều thường dùng trong câu nghi vấn hoặc điều kiện 'if'. 'Every' không đi trực tiếp với 'of'.",
    "sentenceVi": "Vui lòng cho chúng tôi biết nếu bất kỳ chiếc máy tính xách tay nào trong số này bị trục trặc.",
    "vocabNotes": [
      {
        "word": "let us know",
        "pos": "cụm từ",
        "vi": "cho chúng tôi biết"
      },
      {
        "word": "any",
        "pos": "đại từ",
        "vi": "bất kỳ"
      },
      {
        "word": "laptops",
        "pos": "danh từ",
        "vi": "máy tính xách tay"
      },
      {
        "word": "malfunctioning",
        "pos": "tính từ",
        "vi": "trục trặc"
      }
    ]
  },
  {
    "id": "B3-gen06",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun"
    ],
    "prompt": "Chọn đáp án đúng về đại từ bất định:",
    "sentence": "The company has three branches; one is in London, ___ is in Paris, and the last is in Tokyo.",
    "options": [
      "other",
      "others",
      "another",
      "the others"
    ],
    "answerIndex": 2,
    "explanationVi": "Khi liệt kê đối tượng thứ hai trong số ba đối tượng, ta dùng 'another'. Đối tượng cuối cùng sẽ dùng 'the other' hoặc 'the last'.",
    "sentenceVi": "Công ty có ba chi nhánh; một ở London, một ở Paris và cái cuối cùng ở Tokyo.",
    "vocabNotes": [
      {
        "word": "company",
        "pos": "danh từ",
        "vi": "công ty"
      },
      {
        "word": "branches",
        "pos": "danh từ",
        "vi": "chi nhánh"
      },
      {
        "word": "another",
        "pos": "đại từ",
        "vi": "một cái khác"
      },
      {
        "word": "last",
        "pos": "tính từ",
        "vi": "cuối cùng"
      }
    ]
  },
  {
    "id": "B3-gen07",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "indefinite-pronoun"
    ],
    "prompt": "Điền đại từ bất định phù hợp (chỉ người):",
    "sentence": "___ in the office was surprised by the sudden announcement yesterday.",
    "explanationVi": "Các đại từ bất định như 'Everyone' hoặc 'Everybody' đi với động từ số ít 'was' để chỉ toàn bộ mọi người.",
    "sentenceVi": "Mọi người trong văn phòng đều bất ngờ trước thông báo đột ngột ngày hôm qua.",
    "vocabNotes": [
      {
        "word": "Everyone",
        "pos": "đại từ",
        "vi": "mọi người"
      },
      {
        "word": "office",
        "pos": "danh từ",
        "vi": "văn phòng"
      },
      {
        "word": "surprised by",
        "pos": "cụm từ",
        "vi": "bất ngờ bởi"
      },
      {
        "word": "sudden",
        "pos": "tính từ",
        "vi": "đột ngột"
      },
      {
        "word": "announcement",
        "pos": "danh từ",
        "vi": "thông báo"
      },
      {
        "word": "yesterday",
        "pos": "trạng từ",
        "vi": "hôm qua"
      }
    ],
    "options": [
      "Somebody",
      "Everyone",
      "Anybody",
      "Nobody"
    ],
    "answerIndex": 1
  },
  {
    "id": "B3-gen08",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "demonstrative-pronoun"
    ],
    "prompt": "Chọn đại từ chỉ định phù hợp:",
    "sentence": "The profit margin of this quarter is higher than ___ of the previous one.",
    "options": [
      "this",
      "that",
      "these",
      "those"
    ],
    "answerIndex": 1,
    "explanationVi": "Dùng 'that' để thay thế cho danh từ số ít 'the profit margin' đã đề cập trước đó để tránh lặp từ.",
    "sentenceVi": "Biên lợi nhuận của quý này cao hơn so với quý trước.",
    "vocabNotes": [
      {
        "word": "profit margin",
        "pos": "cụm từ",
        "vi": "biên lợi nhuận"
      },
      {
        "word": "quarter",
        "pos": "danh từ",
        "vi": "quý"
      },
      {
        "word": "higher",
        "pos": "tính từ",
        "vi": "cao hơn"
      },
      {
        "word": "that",
        "pos": "đại từ",
        "vi": "cái đó"
      },
      {
        "word": "previous",
        "pos": "tính từ",
        "vi": "trước đó"
      }
    ]
  },
  {
    "id": "B3-gen09",
    "topicId": "B3",
    "type": "wordOrder",
    "difficulty": 2,
    "tags": [
      "reflexive-pronoun"
    ],
    "prompt": "Sắp xếp các từ để nhấn mạnh chủ ngữ:",
    "tiles": [
      "The",
      "manager",
      "herself",
      "will",
      "sign",
      "the",
      "contracts"
    ],
    "answer": "The manager herself will sign the contracts",
    "explanationVi": "Đại từ phản thân 'herself' đặt ngay sau danh từ 'the manager' để nhấn mạnh chính người quản lý sẽ thực hiện hành động.",
    "sentenceVi": "Chính người quản lý sẽ ký hợp đồng.",
    "vocabNotes": [
      {
        "word": "manager",
        "pos": "danh từ",
        "vi": "quản lý"
      },
      {
        "word": "herself",
        "pos": "đại từ",
        "vi": "chính cô ấy"
      },
      {
        "word": "sign",
        "pos": "động từ",
        "vi": "ký"
      },
      {
        "word": "contracts",
        "pos": "danh từ",
        "vi": "hợp đồng"
      }
    ]
  },
  {
    "id": "B3-gen10",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun"
    ],
    "prompt": "Chọn đáp án đúng:",
    "sentence": "___ of the two candidates was suitable for the managerial position.",
    "options": [
      "Neither",
      "None",
      "Both",
      "Any"
    ],
    "answerIndex": 0,
    "explanationVi": "'Neither of' dùng cho 2 đối tượng và đi với động từ số ít 'was'. 'None' thường dùng cho 3 đối tượng trở lên.",
    "sentenceVi": "Không ứng viên nào trong số hai người phù hợp với vị trí quản lý.",
    "vocabNotes": [
      {
        "word": "Neither",
        "pos": "đại từ",
        "vi": "không ai (trong hai)"
      },
      {
        "word": "candidates",
        "pos": "danh từ",
        "vi": "ứng viên"
      },
      {
        "word": "suitable for",
        "pos": "cụm từ",
        "vi": "phù hợp với"
      },
      {
        "word": "managerial",
        "pos": "tính từ",
        "vi": "thuộc quản lý"
      },
      {
        "word": "position",
        "pos": "danh từ",
        "vi": "vị trí"
      }
    ]
  },
  {
    "id": "B3-bulk-001",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "personal-pronoun",
      "subject"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ are the best player on the team.",
    "options": [
      "You",
      "Your",
      "Yours",
      "Yourself"
    ],
    "answerIndex": 0,
    "explanationVi": "Đại từ chủ ngữ \"You\" làm chủ ngữ trong câu.",
    "sentenceVi": "Bạn là cầu thủ giỏi nhất trong đội.",
    "vocabNotes": [
      {
        "word": "player",
        "pos": "danh từ",
        "vi": "cầu thủ"
      }
    ]
  },
  {
    "id": "B3-bulk-002",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "personal-pronoun",
      "object"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Please give the document to ___ when you finish.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ \"to\" dùng đại từ tân ngữ \"me\".",
    "sentenceVi": "Vui lòng đưa tài liệu cho tôi khi bạn xong.",
    "vocabNotes": [
      {
        "word": "document",
        "pos": "danh từ",
        "vi": "tài liệu"
      }
    ]
  },
  {
    "id": "B3-bulk-003",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "possessive-adjective",
      "my"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "This is ___ favorite restaurant in the city.",
    "options": [
      "I",
      "me",
      "my",
      "mine"
    ],
    "answerIndex": 2,
    "explanationVi": "Tính từ sở hữu \"my\" + danh từ (favorite restaurant).",
    "sentenceVi": "Đây là nhà hàng yêu thích của tôi trong thành phố.",
    "vocabNotes": [
      {
        "word": "favorite",
        "pos": "tính từ",
        "vi": "yêu thích"
      }
    ]
  },
  {
    "id": "B3-bulk-004",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "possessive-pronoun",
      "mine"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "That pen on the table is ___.",
    "options": [
      "my",
      "me",
      "mine",
      "I"
    ],
    "answerIndex": 2,
    "explanationVi": "Đại từ sở hữu \"mine\" (= của tôi), không đi cùng danh từ. \"My\" cần danh từ phía sau.",
    "sentenceVi": "Cây bút trên bàn đó là của tôi.",
    "vocabNotes": [
      {
        "word": "pen",
        "pos": "danh từ",
        "vi": "cây bút"
      }
    ]
  },
  {
    "id": "B3-bulk-005",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "personal-pronoun",
      "she-her"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I saw ___ at the conference yesterday.",
    "options": [
      "she",
      "her",
      "hers",
      "herself"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Her\" là đại từ tân ngữ (sau động từ).",
    "sentenceVi": "Tôi đã thấy cô ấy tại hội nghị hôm qua.",
    "vocabNotes": [
      {
        "word": "conference",
        "pos": "danh từ",
        "vi": "hội nghị"
      }
    ]
  },
  {
    "id": "B3-bulk-006",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "possessive-pronoun",
      "its"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The dog wagged ___ tail happily.",
    "options": [
      "it",
      "its",
      "it's",
      "their"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Its\" là tính từ sở hữu của \"it\" (con chó). Khác với \"it's\" = it is.",
    "sentenceVi": "Con chó vẫy đuôi của nó một cách vui vẻ.",
    "vocabNotes": [
      {
        "word": "wag",
        "pos": "động từ",
        "vi": "vẫy"
      },
      {
        "word": "tail",
        "pos": "danh từ",
        "vi": "đuôi"
      }
    ]
  },
  {
    "id": "B3-bulk-007",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "reflexive-pronoun",
      "myself"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I made dinner ___ tonight.",
    "options": [
      "me",
      "my",
      "mine",
      "myself"
    ],
    "answerIndex": 3,
    "explanationVi": "Đại từ phản thân \"myself\" = tự mình (tôi tự làm).",
    "sentenceVi": "Tối nay tôi tự nấu bữa tối.",
    "vocabNotes": [
      {
        "word": "dinner",
        "pos": "danh từ",
        "vi": "bữa tối"
      }
    ]
  },
  {
    "id": "B3-bulk-008",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "demonstrative",
      "this-these"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ shoes are mine; please don't move them.",
    "options": [
      "This",
      "That",
      "These",
      "Those"
    ],
    "answerIndex": 2,
    "explanationVi": "\"These\" cho danh từ số nhiều ở gần. \"Shoes\" là số nhiều.",
    "sentenceVi": "Đôi giày này là của tôi; vui lòng đừng di chuyển chúng.",
    "vocabNotes": [
      {
        "word": "shoes",
        "pos": "danh từ",
        "vi": "giày"
      }
    ]
  },
  {
    "id": "B3-bulk-009",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "indefinite-pronoun",
      "someone"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ is knocking at the door.",
    "options": [
      "Someone",
      "Anyone",
      "No one",
      "None"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Someone\" (ai đó) dùng trong câu khẳng định. \"Anyone\" thường dùng trong câu hỏi/phủ định.",
    "sentenceVi": "Có ai đó đang gõ cửa.",
    "vocabNotes": [
      {
        "word": "knock",
        "pos": "động từ",
        "vi": "gõ"
      }
    ]
  },
  {
    "id": "B3-bulk-010",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 1,
    "tags": [
      "personal-pronoun",
      "they"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My parents live in Hanoi; ___ moved there last year.",
    "options": [
      "he",
      "she",
      "they",
      "them"
    ],
    "answerIndex": 2,
    "explanationVi": "\"They\" là đại từ chủ ngữ số nhiều, thay cho \"my parents\".",
    "sentenceVi": "Bố mẹ tôi sống ở Hà Nội; họ đã chuyển đến đó năm ngoái.",
    "vocabNotes": [
      {
        "word": "move",
        "pos": "động từ",
        "vi": "chuyển"
      }
    ]
  },
  {
    "id": "B3-bulk-011",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "reflexive-pronoun",
      "themselves"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The kids hurt ___ while playing in the park.",
    "options": [
      "them",
      "themselves",
      "theirs",
      "they"
    ],
    "answerIndex": 1,
    "explanationVi": "Đại từ phản thân \"themselves\" khi chủ ngữ và tân ngữ trùng (the kids tự gây thương cho mình).",
    "sentenceVi": "Bọn trẻ đã bị thương khi chơi trong công viên.",
    "vocabNotes": [
      {
        "word": "hurt",
        "pos": "động từ",
        "vi": "làm tổn thương"
      }
    ]
  },
  {
    "id": "B3-bulk-012",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "possessive-pronoun",
      "theirs"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Our team performed better than ___ in the final round.",
    "options": [
      "their",
      "theirs",
      "them",
      "themselves"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Theirs\" = của họ, không đi cùng danh từ (so sánh với than).",
    "sentenceVi": "Đội chúng tôi thể hiện tốt hơn của họ trong vòng cuối.",
    "vocabNotes": [
      {
        "word": "perform",
        "pos": "động từ",
        "vi": "thể hiện"
      },
      {
        "word": "final round",
        "pos": "cụm từ",
        "vi": "vòng cuối"
      }
    ]
  },
  {
    "id": "B3-bulk-013",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "nothing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "There is ___ to worry about; everything will be fine.",
    "options": [
      "nothing",
      "anything",
      "something",
      "no one"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Nothing\" = không có gì (đã bao hàm ý phủ định, không cần \"not\").",
    "sentenceVi": "Không có gì để lo lắng; mọi thứ sẽ ổn cả.",
    "vocabNotes": [
      {
        "word": "worry",
        "pos": "động từ",
        "vi": "lo lắng"
      }
    ]
  },
  {
    "id": "B3-bulk-014",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "anything"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Is there ___ I can do to help you?",
    "options": [
      "something",
      "anything",
      "nothing",
      "everything"
    ],
    "answerIndex": 1,
    "explanationVi": "Trong câu hỏi thường dùng \"anything\". \"Something\" trong câu hỏi mang nghĩa đề nghị/mời.",
    "sentenceVi": "Có điều gì tôi có thể làm để giúp bạn không?",
    "vocabNotes": [
      {
        "word": "help",
        "pos": "động từ",
        "vi": "giúp đỡ"
      }
    ]
  },
  {
    "id": "B3-bulk-015",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "everyone-verb"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Everyone ___ to take a break after the meeting.",
    "options": [
      "want",
      "wants",
      "wanting",
      "wanted to"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Everyone\" là chủ ngữ số ít, đi với động từ số ít (wants).",
    "sentenceVi": "Mọi người đều muốn nghỉ giải lao sau cuộc họp.",
    "vocabNotes": [
      {
        "word": "break",
        "pos": "danh từ",
        "vi": "giờ nghỉ"
      }
    ]
  },
  {
    "id": "B3-bulk-016",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "reflexive-pronoun",
      "ourselves"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "We taught ___ how to use the new software.",
    "options": [
      "us",
      "ours",
      "ourselves",
      "ourself"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Ourselves\" là đại từ phản thân cho \"we\" (chúng tôi tự dạy mình). Không có dạng \"ourself\".",
    "sentenceVi": "Chúng tôi tự dạy mình cách dùng phần mềm mới.",
    "vocabNotes": [
      {
        "word": "software",
        "pos": "danh từ",
        "vi": "phần mềm"
      }
    ]
  },
  {
    "id": "B3-bulk-017",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "possessive-pronoun",
      "yours"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My phone is broken; can I borrow ___?",
    "options": [
      "your",
      "you",
      "yours",
      "yourself"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Yours\" = của bạn (đại từ sở hữu, không đi với danh từ).",
    "sentenceVi": "Điện thoại của tôi bị hỏng; tôi có thể mượn của bạn không?",
    "vocabNotes": [
      {
        "word": "broken",
        "pos": "tính từ",
        "vi": "hỏng"
      },
      {
        "word": "borrow",
        "pos": "động từ",
        "vi": "mượn"
      }
    ]
  },
  {
    "id": "B3-bulk-018",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "none-of"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ of the applicants had the required experience.",
    "options": [
      "No",
      "None",
      "Nothing",
      "Neither"
    ],
    "answerIndex": 1,
    "explanationVi": "\"None of\" cho 3+ đối tượng số nhiều. \"Neither\" chỉ cho 2.",
    "sentenceVi": "Không ai trong số các ứng viên có kinh nghiệm yêu cầu.",
    "vocabNotes": [
      {
        "word": "applicant",
        "pos": "danh từ",
        "vi": "ứng viên"
      },
      {
        "word": "required",
        "pos": "tính từ",
        "vi": "được yêu cầu"
      }
    ]
  },
  {
    "id": "B3-bulk-019",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "subject-after-and"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My colleague and ___ are working on the same project.",
    "options": [
      "me",
      "I",
      "myself",
      "mine"
    ],
    "answerIndex": 1,
    "explanationVi": "Chủ ngữ trong câu liên kết bằng \"and\" dùng đại từ chủ ngữ \"I\".",
    "sentenceVi": "Đồng nghiệp của tôi và tôi đang làm cùng dự án.",
    "vocabNotes": [
      {
        "word": "colleague",
        "pos": "danh từ",
        "vi": "đồng nghiệp"
      }
    ]
  },
  {
    "id": "B3-bulk-020",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "demonstrative",
      "this-vs-it"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Look at the photo. ___ was taken last summer.",
    "options": [
      "This",
      "That",
      "It",
      "These"
    ],
    "answerIndex": 2,
    "explanationVi": "\"It\" thay cho danh từ đã được đề cập (the photo). \"This/that\" dùng khi giới thiệu lần đầu.",
    "sentenceVi": "Nhìn bức ảnh kìa. Nó được chụp mùa hè năm ngoái.",
    "vocabNotes": [
      {
        "word": "photo",
        "pos": "danh từ",
        "vi": "bức ảnh"
      }
    ]
  },
  {
    "id": "B3-bulk-021",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "each-other"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The two managers respect ___ very much.",
    "options": [
      "themselves",
      "each other",
      "one other",
      "theirs"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Each other\" = lẫn nhau (giữa 2 đối tượng). \"Themselves\" có nghĩa tự bản thân.",
    "sentenceVi": "Hai vị quản lý rất tôn trọng lẫn nhau.",
    "vocabNotes": [
      {
        "word": "respect",
        "pos": "động từ",
        "vi": "tôn trọng"
      }
    ]
  },
  {
    "id": "B3-bulk-022",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "one-another"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "All team members should help ___ to succeed.",
    "options": [
      "themselves",
      "each other",
      "one another",
      "everyone"
    ],
    "answerIndex": 2,
    "explanationVi": "\"One another\" tương tự \"each other\" nhưng thường dùng cho 3+ đối tượng.",
    "sentenceVi": "Tất cả thành viên nhóm nên giúp đỡ lẫn nhau để thành công.",
    "vocabNotes": [
      {
        "word": "succeed",
        "pos": "động từ",
        "vi": "thành công"
      }
    ]
  },
  {
    "id": "B3-bulk-023",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "comparison-than"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "My sister is taller than ___.",
    "options": [
      "I",
      "me",
      "myself",
      "my"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau \"than\" trong văn nói thường dùng đại từ tân ngữ (me, him, her). Trang trọng có thể dùng \"I am\".",
    "sentenceVi": "Chị tôi cao hơn tôi.",
    "vocabNotes": [
      {
        "word": "taller",
        "pos": "tính từ",
        "vi": "cao hơn"
      }
    ]
  },
  {
    "id": "B3-bulk-024",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "everywhere"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I looked ___ for my keys but couldn't find them.",
    "options": [
      "nowhere",
      "everywhere",
      "anywhere",
      "somewhere"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Everywhere\" = khắp mọi nơi. \"Anywhere\" trong câu phủ định/nghi vấn.",
    "sentenceVi": "Tôi đã tìm khắp mọi nơi nhưng không thấy chìa khoá.",
    "vocabNotes": [
      {
        "word": "key",
        "pos": "danh từ",
        "vi": "chìa khoá"
      }
    ]
  },
  {
    "id": "B3-bulk-025",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "subject-it-impersonal"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ is important to back up your data regularly.",
    "options": [
      "This",
      "That",
      "It",
      "These"
    ],
    "answerIndex": 2,
    "explanationVi": "\"It\" chủ ngữ giả trong cấu trúc \"It is + adj + to V\".",
    "sentenceVi": "Điều quan trọng là phải sao lưu dữ liệu thường xuyên.",
    "vocabNotes": [
      {
        "word": "back up",
        "pos": "cụm từ",
        "vi": "sao lưu"
      },
      {
        "word": "regularly",
        "pos": "trạng từ",
        "vi": "thường xuyên"
      }
    ]
  },
  {
    "id": "B3-bulk-026",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "indefinite-pronoun",
      "both-of-them"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I have two best friends; ___ live nearby.",
    "options": [
      "both of them",
      "each of them",
      "both",
      "neither"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Both of them\" = cả hai (đặc biệt khi nói về 2 đối tượng đã đề cập).",
    "sentenceVi": "Tôi có hai người bạn thân nhất; cả hai đều sống gần đây.",
    "vocabNotes": [
      {
        "word": "nearby",
        "pos": "trạng từ",
        "vi": "gần đây"
      }
    ]
  },
  {
    "id": "B3-bulk-027",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "personal-pronoun",
      "plural-they-singular"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "If anyone calls, please tell ___ I'm in a meeting.",
    "options": [
      "him",
      "her",
      "them",
      "it"
    ],
    "answerIndex": 2,
    "explanationVi": "Hiện đại \"they/them\" được dùng làm đại từ trung tính khi không biết giới tính (anyone, somebody).",
    "sentenceVi": "Nếu ai gọi, vui lòng nói với họ rằng tôi đang trong cuộc họp.",
    "vocabNotes": [
      {
        "word": "meeting",
        "pos": "danh từ",
        "vi": "cuộc họp"
      }
    ]
  },
  {
    "id": "B3-bulk-028",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "reflexive-pronoun",
      "emphasis"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The CEO ___ approved the new policy.",
    "options": [
      "him",
      "himself",
      "his",
      "he"
    ],
    "answerIndex": 1,
    "explanationVi": "Đại từ phản thân \"himself\" dùng để nhấn mạnh chính chủ ngữ tự làm hành động.",
    "sentenceVi": "Chính CEO đã phê duyệt chính sách mới.",
    "vocabNotes": [
      {
        "word": "approve",
        "pos": "động từ",
        "vi": "phê duyệt"
      }
    ]
  },
  {
    "id": "B3-bulk-029",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "whoever"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ finishes first will receive a special bonus.",
    "options": [
      "Whoever",
      "Whomever",
      "However",
      "Whichever"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Whoever\" = bất kỳ ai (làm chủ ngữ của mệnh đề).",
    "sentenceVi": "Bất kỳ ai hoàn thành đầu tiên sẽ nhận phần thưởng đặc biệt.",
    "vocabNotes": [
      {
        "word": "bonus",
        "pos": "danh từ",
        "vi": "phần thưởng"
      }
    ]
  },
  {
    "id": "B3-bulk-030",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "whatever"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ you decide, I will support you.",
    "options": [
      "Whoever",
      "Whatever",
      "Whichever",
      "Wherever"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Whatever\" = bất cứ điều gì (làm tân ngữ của decide).",
    "sentenceVi": "Bất kể bạn quyết định gì, tôi cũng sẽ ủng hộ bạn.",
    "vocabNotes": [
      {
        "word": "decide",
        "pos": "động từ",
        "vi": "quyết định"
      },
      {
        "word": "support",
        "pos": "động từ",
        "vi": "ủng hộ"
      }
    ]
  },
  {
    "id": "B3-bulk-031",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "plural-we"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ enjoyed the team-building activity last weekend.",
    "options": [
      "Us",
      "Our",
      "We",
      "Ours"
    ],
    "answerIndex": 2,
    "explanationVi": "\"We\" là đại từ chủ ngữ số nhiều.",
    "sentenceVi": "Chúng tôi đã thích thú buổi team-building cuối tuần qua.",
    "vocabNotes": [
      {
        "word": "team-building",
        "pos": "cụm từ",
        "vi": "hoạt động gắn kết đội nhóm"
      }
    ]
  },
  {
    "id": "B3-bulk-032",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "object-us"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "The host welcomed ___ at the front door.",
    "options": [
      "us",
      "we",
      "ours",
      "ourselves"
    ],
    "answerIndex": 0,
    "explanationVi": "\"Us\" là đại từ tân ngữ số nhiều sau động từ.",
    "sentenceVi": "Chủ nhà đã chào đón chúng tôi ở cửa trước.",
    "vocabNotes": [
      {
        "word": "host",
        "pos": "danh từ",
        "vi": "chủ nhà"
      }
    ]
  },
  {
    "id": "B3-bulk-033",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "personal-pronoun",
      "both-cases"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "He gave the gift to my colleague and ___.",
    "options": [
      "I",
      "me",
      "myself",
      "mine"
    ],
    "answerIndex": 1,
    "explanationVi": "Sau giới từ \"to\" dùng đại từ tân ngữ. \"Me\" sau \"and\" (không phải \"I\" như nhiều người Việt hay nhầm).",
    "sentenceVi": "Anh ấy đã tặng quà cho đồng nghiệp của tôi và tôi.",
    "vocabNotes": [
      {
        "word": "gift",
        "pos": "danh từ",
        "vi": "quà"
      }
    ]
  },
  {
    "id": "B3-bulk-034",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "each-of-the"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ of the participants ___ a certificate.",
    "options": [
      "Each / receive",
      "Each / receives",
      "Every / receive",
      "Some / receives"
    ],
    "answerIndex": 1,
    "explanationVi": "\"Each of the + N (số nhiều)\" đi với động từ số ít.",
    "sentenceVi": "Mỗi người tham gia đều nhận được một chứng chỉ.",
    "vocabNotes": [
      {
        "word": "participant",
        "pos": "danh từ",
        "vi": "người tham gia"
      },
      {
        "word": "certificate",
        "pos": "danh từ",
        "vi": "chứng chỉ"
      }
    ]
  },
  {
    "id": "B3-bulk-035",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "either-or-singular"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Either John or Tom ___ available to assist you.",
    "options": [
      "are",
      "is",
      "were",
      "be"
    ],
    "answerIndex": 1,
    "explanationVi": "Trong \"either ... or ...\", động từ chia theo chủ ngữ gần nhất (Tom - số ít → is).",
    "sentenceVi": "Hoặc John hoặc Tom sẽ có mặt để hỗ trợ bạn.",
    "vocabNotes": [
      {
        "word": "assist",
        "pos": "động từ",
        "vi": "hỗ trợ"
      }
    ]
  },
  {
    "id": "B3-bulk-036",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "personal-pronoun",
      "subject-it-weather"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ has been raining all morning.",
    "options": [
      "The weather",
      "It",
      "This",
      "That"
    ],
    "answerIndex": 1,
    "explanationVi": "\"It\" chủ ngữ giả khi nói về thời tiết.",
    "sentenceVi": "Trời đã mưa cả buổi sáng.",
    "vocabNotes": [
      {
        "word": "rain",
        "pos": "động từ",
        "vi": "mưa"
      }
    ]
  },
  {
    "id": "B3-bulk-037",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "someone-singular"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "Someone ___ a wallet at the front desk.",
    "options": [
      "leave",
      "leaves",
      "is leaving",
      "has left"
    ],
    "answerIndex": 3,
    "explanationVi": "\"Someone\" là chủ ngữ số ít. HTHT với hành động vừa xảy ra để lại kết quả hiện tại.",
    "sentenceVi": "Có ai đó đã để quên ví ở quầy lễ tân.",
    "vocabNotes": [
      {
        "word": "wallet",
        "pos": "danh từ",
        "vi": "ví"
      },
      {
        "word": "front desk",
        "pos": "cụm từ",
        "vi": "quầy lễ tân"
      }
    ]
  },
  {
    "id": "B3-bulk-038",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "double-negative"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "I don't have ___ ideas about how to fix this problem.",
    "options": [
      "no",
      "any",
      "some",
      "nothing"
    ],
    "answerIndex": 1,
    "explanationVi": "Trong câu phủ định dùng \"any\", không dùng \"no\" hay \"nothing\" (vì sẽ thành phủ định kép).",
    "sentenceVi": "Tôi không có bất kỳ ý tưởng nào về cách giải quyết vấn đề này.",
    "vocabNotes": [
      {
        "word": "idea",
        "pos": "danh từ",
        "vi": "ý tưởng"
      }
    ]
  },
  {
    "id": "B3-bulk-039",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 2,
    "tags": [
      "possessive-adjective",
      "whose-of-thing"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "That's the building ___ design won the architectural award.",
    "options": [
      "which",
      "its",
      "whose",
      "that"
    ],
    "answerIndex": 2,
    "explanationVi": "\"Whose\" chỉ sở hữu, dùng được cho cả người và vật.",
    "sentenceVi": "Đó là toà nhà mà thiết kế của nó đã đoạt giải kiến trúc.",
    "vocabNotes": [
      {
        "word": "design",
        "pos": "danh từ",
        "vi": "thiết kế"
      },
      {
        "word": "architectural",
        "pos": "tính từ",
        "vi": "thuộc kiến trúc"
      }
    ]
  },
  {
    "id": "B3-bulk-040",
    "topicId": "B3",
    "type": "mcq",
    "difficulty": 3,
    "tags": [
      "indefinite-pronoun",
      "one-formal"
    ],
    "prompt": "Chọn đáp án phù hợp:",
    "sentence": "___ should always be polite to others, regardless of the situation.",
    "options": [
      "One",
      "You",
      "They",
      "We"
    ],
    "answerIndex": 0,
    "explanationVi": "\"One\" là đại từ tổng quát trong văn viết trang trọng (= bất kỳ ai). \"You\" thường dùng trong văn nói.",
    "sentenceVi": "Người ta nên luôn lịch sự với người khác, bất kể tình huống nào.",
    "vocabNotes": [
      {
        "word": "polite",
        "pos": "tính từ",
        "vi": "lịch sự"
      },
      {
        "word": "regardless of",
        "pos": "cụm từ",
        "vi": "bất kể"
      }
    ]
  }
];
