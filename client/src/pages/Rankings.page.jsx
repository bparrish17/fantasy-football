import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePlayers } from "../services/api.service";
import { tableParamsToBody } from "../utils/helpers";


export default function RankingsPage() {
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 100
    }
  });
  const { data: players, isLoading } = usePlayers(tableParamsToBody({ ...tableParams }))
  const [total, setTotal] = useState();

  console.log('players', players)

  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({ pagination, filters, sorter });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      refetch();
    }
  };

  useEffect(() => {
    setTotal(players?.length);
  }, [players]);

  return (
    <div>
      <Table
        size="small"
        rowKey="id"
        loading={isLoading}
        columns={columns}
        dataSource={players}
        pagination={{ ...tableParams.pagination, total }}
        onChange={handleTableChange}
      />
    </div>
  )
}

const columns = [
  {
    title: 'Name',
    key: 'name',
    render: (player) => `${player?.first_name} ${player?.last_name}`
  },
  {
    title: 'Position',
    dataIndex: 'position',
    filters: [
      {
        text: 'QB',
        value: 'QB'
      },
      {
        text: 'RB',
        value: 'RB'
      },
      {
        text: 'WR',
        value: 'WR'
      },
      {
        text: 'TE',
        value: 'TE'
      },
      {
        text: 'K',
        value: 'K'
      },
      {
        text: 'DST',
        value: 'DST'
      }
    ],
    filterOnClose: true
  },
  {
    title: 'Team',
    dataIndex: 'team_id'
  },
  { title: 'Bye', dataIndex: 'bye_week' },
  {
    title: 'xPassYards',
    dataIndex: 'x_pass_yards',
    sorter: true
  },
  {
    title: 'xPassTDs',
    dataIndex: 'x_pass_tds',
    sorter: true
  },
  {
    title: 'xRushYards',
    dataIndex: 'x_rush_yards',
    sorter: true
  },
  {
    title: 'xRushTDs',
    key: 'x_rush_tds',
    sorter: true
  },
  {
    title: 'xRecYards',
    key: 'x_rec_yards',
    sorter: true
  },
  {
    title: 'xRecTDs',
    dataIndex: 'x_rec_tds',
    sorter: true
  },
]