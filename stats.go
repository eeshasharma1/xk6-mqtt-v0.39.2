package mqtt

import "go.k6.io/k6/stats"

var (
	// TODO not implemented yet
	ReaderData = stats.New("mqtt.reader.data_recieved", stats.Counter)
	// TODO not implemented yet
	WriterData = stats.New("mqtt.writer.data_sent", stats.Counter)
)
