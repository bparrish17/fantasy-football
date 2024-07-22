import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { usePlayers } from "../services/api.service";


export default function RankingsPage() {
  const { data: players, isLoading } = usePlayers()
  const [total, setTotal] = useState();
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 100
    }
  });

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
        value: 'qb'
      },
      {
        text: 'RB',
        value: 'rb'
      },
      {
        text: 'WR',
        value: 'wr'
      },
      {
        text: 'TE',
        value: 'te'
      },
      {
        text: 'K',
        value: 'k'
      },
      {
        text: 'DST',
        value: 'dst'
      }
    ],
    filterOnClose: true
  },
  {
    title: 'Team',
    dataIndex: 'team_id'
  },
  {
    title: 'xPassYards',
    dataIndex: 'x_pass_yards'
  },
  {
    title: 'xPassTDs',
    dataIndex: 'x_pass_tds'
  },
  {
    title: 'xRushYards',
    dataIndex: 'x_rush_yards'
  },
  {
    title: 'xRushTDs',
    key: 'x_rush_tds'
  },
  {
    title: 'xRecYards',
    key: 'x_rec_yards'
  },
  {
    title: 'xRecTDs',
    dataIndex: 'x_rec_tds'
  },
]