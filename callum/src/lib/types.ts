export type MessageRecord = {
  from: string;
  message: string;
  timestamp: Date;
};

export type Refugee = {
  agentId: string;
  userName: string;
  timestamp: number;
  chatLog: MessageRecord[];
};
