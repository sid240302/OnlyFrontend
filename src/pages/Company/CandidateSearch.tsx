import React, { useState } from 'react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { JobSeekerData } from '@/types/jobSeeker';
import axios from 'axios';
import { config } from '@/config';
import DashboardLayout from '@/components/layout/CompanyLayout';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';

const fetchCandidates = async (name: string, university: string, minScore: string, maxScore: string): Promise<JobSeekerData[]> => {
  const params: any = {};
  if (name) params.search = name;
  if (university) params.university = university;
  if (minScore) params.min_score = minScore;
  if (maxScore) params.max_score = maxScore;
  const token = localStorage.getItem('token');
  try {
    const res = await axios.get(`${config.API_BASE_URL}/company/candidates/search`, {
      params,
      headers: { Authorization: `Bearer ${token}` },
    });
    if (typeof res.data === 'string' && res.data.startsWith('<!DOCTYPE')) {
      throw new Error('API returned HTML. Check your API URL and server.');
    }
    return res.data;
  } catch (err: any) {
    if (err.response && typeof err.response.data === 'string' && err.response.data.startsWith('<!DOCTYPE')) {
      throw new Error('API returned HTML. Check your API URL and server.');
    }
    throw err;
  }
};

const CandidateSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [university, setUniversity] = useState('');
  const [minScore, setMinScore] = useState('');
  const [maxScore, setMaxScore] = useState('');
  const [candidates, setCandidates] = useState<JobSeekerData[]>([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<JobSeekerData | null>(null);
  const [error, setError] = useState('');
  const [sortOrder, setSortOrder] = useState<'default' | 'high-to-low' | 'low-to-high'>('default');

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchCandidates(name, university, minScore, maxScore);
      setCandidates(data);
    } catch (e: any) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setName('');
    setUniversity('');
    setMinScore('');
    setMaxScore('');
    setCandidates([]);
    setError('');
  };

  // Sort candidates by edudiagno_score
  const sortedCandidates = [...candidates].sort((a, b) => {
    if (sortOrder === 'high-to-low') {
      return (b.edudiagno_score || 0) - (a.edudiagno_score || 0);
    } else if (sortOrder === 'low-to-high') {
      return (a.edudiagno_score || 0) - (b.edudiagno_score || 0);
    }
    return 0;
  });

  return (
    <DashboardLayout>
      <div className="p-6 max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Candidate Search</h1>
        <Card className="mb-6 p-6 shadow-sm border bg-card">
          <div className="mb-4 text-lg font-semibold text-blue-900">Filters</div>
          <div className="flex flex-col md:flex-row md:items-end gap-4">
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1 text-muted-foreground">Name</label>
              <Input
                placeholder="Candidate Name"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1">
              <label className="block text-xs font-semibold mb-1 text-muted-foreground">University</label>
              <Input
                placeholder="University Name"
                value={university}
                onChange={e => setUniversity(e.target.value)}
                className="w-full"
              />
            </div>
            <div className="flex-1 flex flex-col gap-1">
              <label className="block text-xs font-semibold mb-1 text-muted-foreground">Edudiagno Score (Min/Max)</label>
              <div className="flex gap-2">
                <Input
                  type="number"
                  min={0}
                  placeholder="Min"
                  value={minScore}
                  onChange={e => setMinScore(e.target.value)}
                  className="w-1/2"
                />
                <Input
                  type="number"
                  min={0}
                  placeholder="Max"
                  value={maxScore}
                  onChange={e => setMaxScore(e.target.value)}
                  className="w-1/2"
                />
              </div>
            </div>
            <div className="flex-1">
              <Label className="block text-xs font-semibold mb-1 text-muted-foreground">Sort by</Label>
              <Select value={sortOrder} onValueChange={v => setSortOrder(v as any)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Edudiagno Score (Default)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Edudiagno Score (Default)</SelectItem>
                  <SelectItem value="high-to-low">Edudiagno Score: High to Low</SelectItem>
                  <SelectItem value="low-to-high">Edudiagno Score: Low to High</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-2 md:ml-4">
              <Button onClick={handleSearch} disabled={loading} className="h-10 px-6">
                {loading ? 'Searching...' : 'Search'}
              </Button>
              <Button onClick={handleClear} variant="secondary" type="button" disabled={loading} className="h-10 px-6">
                Clear
              </Button>
            </div>
          </div>
        </Card>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-muted-foreground text-sm">{candidates.length > 0 ? `${candidates.length} candidate${candidates.length > 1 ? 's' : ''} found` : ''}</span>
        </div>
        <div className="bg-card border border-border rounded-lg shadow-sm p-2 space-y-2 min-h-[120px]">
          {sortedCandidates.length === 0 && !loading && !error && (
            <div className="text-center text-muted-foreground py-8">No candidates found. Try adjusting your filters.</div>
          )}
          {sortedCandidates.map(candidate => (
            <Card
              key={candidate.id}
              className="p-4 flex justify-between items-center cursor-pointer bg-card text-foreground hover:bg-accent border border-border transition-colors group"
              onClick={() => setSelected(candidate)}
            >
              <div>
                <div className="font-semibold text-lg group-hover:text-blue-800">{candidate.firstname} {candidate.lastname}</div>
                <div className="text-sm text-muted-foreground">{candidate.email}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <div className="text-sm text-muted-foreground">{candidate.current_location}</div>
                {candidate.edudiagno_score !== undefined && (
                  <Badge className="bg-primary/10 text-primary font-bold px-3 py-1 rounded-full text-xs mt-1">
                    Edudiagno Score: {candidate.edudiagno_score}
                  </Badge>
                )}
              </div>
            </Card>
          ))}
        </div>
        <Dialog open={!!selected} onOpenChange={() => setSelected(null)}>
          <DialogContent>
            <DialogTitle>Candidate Details</DialogTitle>
            {selected && (
              <div className="bg-card rounded-lg p-4 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Name</div>
                    <div className="font-semibold text-lg">{selected.firstname} {selected.lastname}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Email</div>
                    <div className="text-foreground">{selected.email}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Phone</div>
                    <div className="text-foreground">{selected.phone || <span className='text-muted-foreground'>—</span>}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Location</div>
                    <div className="text-foreground">{selected.current_location || <span className='text-muted-foreground'>—</span>}</div>
                  </div>
                  {selected.edudiagno_score !== undefined && (
                    <div className="col-span-1 sm:col-span-2 flex items-center gap-2 mt-2">
                      <Badge className="bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-base">Edudiagno Score: {selected.edudiagno_score}</Badge>
                    </div>
                  )}
                </div>
                <Separator className="my-2" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">Education</div>
                  <div className="text-foreground">
                    {selected.higher_educations?.length ? (
                      <ul className="list-disc ml-5 space-y-1">
                        {selected.higher_educations.map((edu: any, idx: number) => (
                          <li key={idx}>{edu.college_name}</li>
                        ))}
                      </ul>
                    ) : <span className="text-muted-foreground">—</span>}
                  </div>
                </div>
                <Separator className="my-2" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">Key Skills</div>
                  <div className="flex flex-wrap gap-2">
                    {selected.key_skills ? selected.key_skills.split(',').map((skill: string, idx: number) => (
                      <Badge key={idx} className="bg-accent text-foreground px-2 py-1 rounded-full text-xs">{skill.trim()}</Badge>
                    )) : <span className="text-muted-foreground">—</span>}
                  </div>
                </div>
                <Separator className="my-2" />
                <div>
                  <div className="text-xs text-muted-foreground mb-1 font-semibold uppercase tracking-wider">Profile Summary</div>
                  <div className="text-foreground whitespace-pre-line">{selected.profile_summary || <span className="text-muted-foreground">—</span>}</div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </DashboardLayout>
  );
};

export default CandidateSearch; 